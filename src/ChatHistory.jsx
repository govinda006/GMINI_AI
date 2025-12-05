function ChatHistory({ history }) {
  return (
    <div className="w-full max-w-xl bg-gray-800 rounded-lg p-4 mb-6 shadow-inner min-h-[120px] max-h-64 overflow-y-auto">
      {history.length === 0 ? (
        <div className="text-gray-400 text-center">No conversation yet.</div>
      ) : (
        history.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold text-indigo-300">You:</div>
            <div className="mb-2 text-white">{item.question}</div>
            <div className="font-semibold text-pink-300">AI:</div>
            <div className="text-gray-200">{item.answer}</div>
            <hr className="my-2 border-gray-700" />
          </div>
        ))
      )}
    </div>
  );
}

export default ChatHistory;
