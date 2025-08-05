import { GoogleGenAI, Type } from "@google/genai";
import { Challenge, AIReviewResult } from '../types';

let ai: GoogleGenAI;

const getAI = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
}

const reviewSchema = {
    type: Type.OBJECT,
    properties: {
        is_correct: {
            type: Type.BOOLEAN,
            description: "Is the user's code a correct solution for the challenge?"
        },
        feedback: {
            type: Type.STRING,
            description: "Constructive, friendly feedback for the user. Explain what's wrong or how they could improve. If the code is correct, compliment them and suggest an alternative or more Pythonic way to do it."
        },
        corrected_code: {
            type: Type.STRING,
            description: "A complete, corrected version of the user's code that solves the challenge."
        }
    },
    required: ["is_correct", "feedback", "corrected_code"]
};


export const getAIReview = async (challenge: Challenge, userCode: string): Promise<AIReviewResult> => {
    const genAI = getAI();

    const prompt = `You are an expert Python coding tutor. Your role is to provide helpful feedback to a student learning Python. 
    
    A student has submitted the following code for the challenge described below. Please evaluate it.

    **Challenge Information:**
    - **Title:** ${challenge.title}
    - **Description:** ${challenge.description}
    - **Tasks to complete:** 
      ${challenge.tasks.join('\n      ')}

    **User's Code:**
    \`\`\`python
    ${userCode}
    \`\`\`

    Please analyze the user's code and determine if it correctly and completely solves the challenge's tasks. Provide feedback and a corrected code snippet in the requested JSON format.
    `;

    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: reviewSchema
            }
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText) as AIReviewResult;
        return result;

    } catch (error) {
        console.error("Error getting AI review:", error);
        throw new Error("Failed to get AI review. The API may be unavailable or the response was invalid.");
    }
};