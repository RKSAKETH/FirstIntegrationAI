export async function askGemini(prompt) {
    const response = await fetch("http://localhost:3000/api/gemini/ask",{
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    })
    const data = await response.json();
    return data.output;
}