import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: newMessages
        })
      });

      const data = await response.json();
      const assistantMessage = data.choices[0].message;
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      alert("Error fetching response");
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setListening(false);
    };

    recognition.onerror = (event) => {
      alert("Voice recognition error: " + event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>
      <div className="space-y-2 h-96 overflow-y-auto border p-4 rounded bg-white mb-4">
        {messages.slice(1).map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.role === "user" ? "text-right text-blue-700" : "text-left text-green-700"
            }
          >
            <p><strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}</p>
          </div>
        ))}
        {loading && <p className="text-gray-400">Typing...</p>}
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${listening ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}
          onClick={handleVoiceInput}
        >
          🎤
        </button>
      </div>
    </div>
    </>
  )
}

export default App
