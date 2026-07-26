const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function generateNewsSummary(title, description) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a helpful news assistant.",
        },
        {
          role: "user",
          content: `Explain this news in simple English.

Title: ${title}

Description: ${description}

Give:
1. All Details
2. Summary`,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  return data.choices[0].message.content;
}