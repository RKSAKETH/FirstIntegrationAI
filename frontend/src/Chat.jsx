import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk= async () => {
    const response = await fetch("http://localhost:3000/api/gemini/ask",{
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt:input })
    })
    const data = await response.json();
    setReply(data.output);
  }

  return (
    <div>
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAsk}>Ask Gemini</button>
      <p>Response: {reply}</p>
    </div>
  );
}
