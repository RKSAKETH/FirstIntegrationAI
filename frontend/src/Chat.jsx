import { useState } from "react";
import { askGemini } from "./gemini";

export default function Chat() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  async function handleAsk() {
    const answer = await askGemini(input);
    console.log("AI reply:", answer);  // Verify here
    setReply(answer);
  }

  return (
    <div>
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAsk}>Ask Gemini</button>
      <p>{input}</p>
      <p>Response: {reply}</p>
    </div>
  );
}
