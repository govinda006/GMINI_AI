import axios from "axios";
import { useState } from "react";
import "./App.css";
import ChatHistory from "./ChatHistory";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  async function generateResponse() {
    setLoading(true);
    setAnswer("");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB0cfYoFXjxxJcF-vbvOAdXUKxAhhEVMUk",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: question }],
          },
        ],
      },
    });
    const aiAnswer = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    setAnswer(aiAnswer);
    setHistory([...history, { question, answer: aiAnswer }]);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-2 sm:p-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">
          Chat Ai
        </h1>
        <section id="about" className="w-full max-w-full sm:max-w-xl bg-gray-950 text-gray-200 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 shadow-md text-center">
          <p className="text-sm sm:text-base">Ask anything and get instant answers powered by Gemini AI. Your chat history is saved below for your reference.</p>
        </section>
        <ChatHistory history={history} />
        <textarea
          className="w-full max-w-full sm:max-w-xl rounded-lg p-2 sm:p-4 text-base sm:text-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-2 sm:mb-4 resize-none shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          cols="30"
          rows="6"
          placeholder="Ask me anything..."
        />
        <button
          className="w-full sm:w-auto rounded-lg border border-transparent px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg transition duration-300 ease-in-out hover:from-pink-500 hover:to-indigo-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 mb-4 sm:mb-6"
          onClick={generateResponse}
          disabled={loading || !question.trim()}
        >
          {loading ? (
            <span className="flex items-center justify-center"><svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Loading...</span>
          ) : (
            "Generate Answer"
          )}
        </button>
        <div className="w-full max-w-full sm:max-w-xl bg-gray-900 text-white rounded-lg p-2 sm:p-4 shadow-lg min-h-[40px] sm:min-h-[60px] mb-6 sm:mb-8 text-sm sm:text-base">
          {answer}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
