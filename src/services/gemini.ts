import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getCommanderBriefing() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Bạn là Chỉ huy trưởng lực lượng cứu hộ vùng cao. Hãy viết một lời chào ngắn gọn (khoảng 2-3 câu) gửi đến Phó chỉ huy để bắt đầu ca trực hôm nay. Nhấn mạnh vào tầm quan trọng của việc đọc bản đồ địa hình để cứu người. Ngôn ngữ: Tiếng Việt, chuyên nghiệp nhưng gần gũi.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching briefing:", error);
    return `Chào mừng Phó chỉ huy! Hôm nay tình hình địa hình rất phức tạp. Hãy tập trung quan sát các bản đồ để đưa ra quyết định chính xác nhất. Tính mạng của người dân nằm trong tay bạn!`;
  }
}
