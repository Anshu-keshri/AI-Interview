import axios from 'axios'

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages should be a non-empty array");
        }
        const model = process.env.OPENROUTER_MODEL || 'gpt-4o-mini'
        console.log('OpenRouter: using model ->', model)
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model,
                messages: messages
            }, {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            },
        });
        const content = response?.data?.choices?.[0]?.message?.content;
        if(!content || !content.trim()){
            throw new Error("AI returned empty response");
        }
        return content;
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        // Rethrow original error so callers can access response details for debugging
        throw error;
    }
}