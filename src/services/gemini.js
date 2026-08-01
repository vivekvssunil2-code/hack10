import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log("Gemini Key:", API_KEY);

if (!API_KEY) {
  throw new Error("Gemini API key not found. Check your .env file.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function analyzeComplaint(complaint) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
    });

    const prompt = `
You are CivicMind AI.

Analyze this complaint:

"${complaint}"

Return ONLY valid JSON in this format:

{
  "risk": 0,
  "priority": "LOW",
  "confidence": 0,
  "category": "",
  "location": "",
  "recommendation": ""
}
`;

    const result = await model.generateContent(prompt);

    console.log("Raw Response:", result);

    const response = await result.response;
    const text = response.text();

    console.log("AI Output:", text);

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (err) {
    console.error("FULL GEMINI ERROR:", err);

    if (err.response) {
      console.error("Response:", err.response);
    }

    throw err;
  }
}