import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

export async function analyzeComplaint(complaint) {
  const prompt = `
You are CivicMind AI.

Analyze the following community issue and return ONLY in this format:

Category:
Priority:
Risk Score:
Prediction:
Recommendation:
Reason:

Complaint:
${complaint}
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API failed:", error);

    // Demo fallback (used if the API quota is unavailable)
    return `
Category: Infrastructure

Priority: High

Risk Score: 92%

Prediction:
Heavy rainfall may worsen the issue and increase public safety risks.

Recommendation:
Repair the damaged infrastructure within 48 hours, inspect nearby drainage systems, and deploy a maintenance team.

Reason:
The issue affects public safety, is likely to recur, and requires immediate attention.
`;
  }
}