# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎤 AI Chatbot UI with Voice Input (React + OpenAI API)

A simple, responsive AI-powered chatbot built with **React** that integrates with **OpenAI's GPT-3.5 API**. This chatbot supports:

* 📖 Text-based conversation
* 🎤 Voice input using the browser's native Speech Recognition
* 🎛️ Visual mic activity indicator when listening

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* An OpenAI account and API key from [platform.openai.com](https://platform.openai.com/account/api-keys)

---

## 📂 Installation

1. Clone the repository:

   git clone https://github.com/your-repo/openai-chatbot-ui.git
   cd openai-chatbot-ui

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

---

## 🔑 Updating Your OpenAI API Key

1. In the `App.jsx` file, locate this block:

   ```javascript
   headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer YOUR_OPENAI_API_KEY`
   }
   ```

2. Replace `YOUR_OPENAI_API_KEY` with your actual OpenAI API key:

   ```javascript
   Authorization: `Bearer sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   ```

3. Make sure you keep your API key **secure** and do not expose it in public repositories.

---

## 🎤 Voice Input Support

* Click the 🎤 microphone button to start speaking.
* A **pulsing red mic button** indicates the chatbot is listening.
* Voice input is transcribed directly into the chat input field.

> Note: Voice input requires Chrome or browsers that support `webkitSpeechRecognition`.

---

## ✨ Features

* ✅ Chat interface using OpenAI’s GPT-3.5 Chat API
* ✅ Voice input with live mic indicator
* ✅ Typing indicator while waiting for AI response
* ✅ Clean, responsive UI with Tailwind CSS
* ✅ Supports keyboard (Enter key) and mouse inputs

---

## 📌 Notes

* This project is for educational and demo purposes. Avoid committing your API keys to public repositories.
* You can enhance this by adding local storage, streaming responses, or integrating vector search for memory.

---

## 📞 Contact

Feel free to connect with me if you’re interested in collaborating on AI-powered frontend projects!

