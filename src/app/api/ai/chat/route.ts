import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages && messages.length > 0
      ? messages[messages.length - 1].content
      : "";

    let assistantResponse = "";

    if (lastUserMessage.includes("রান্না") || lastUserMessage.toLowerCase().includes("cook")) {
      assistantResponse =
        "আপনার প্যান্ট্রিতে মিনিকেট চাল, ডিম, মসুর ডাল ও টমেটো আছে। আজ রাতে আপনি সহজে 'ডিম ভুনা ও গরম ভাত' অথবা 'ডিম খিচুড়ি' বানাতে পারেন। টমেটোটির মেয়াদ আগামীকাল শেষ হবে, তাই এটি আজই ব্যবহার করা ভালো!";
    } else if (lastUserMessage.includes("টাকা") || lastUserMessage.includes("বাজেট") || lastUserMessage.includes("৳")) {
      assistantResponse =
        "আপনার নভেম্বর মাসের বাজেট সীমা ৳৮,০০০ টাকার মধ্যে এ পর্যন্ত খরচ হয়েছে ৳২,৪৫০ টাকা। এখনো ৳৫,৫৫০ টাকা অবশিষ্ট রয়েছে। আপনার দৈনন্দিন খাবারের খরচ স্বাভাবিক সীমার মধ্যেই রয়েছে।";
    } else if (lastUserMessage.includes("মেয়াদ") || lastUserMessage.toLowerCase().includes("expiry")) {
      assistantResponse =
        "জরুরি সতর্কতা: আপনার ফ্রিজে থাকা ৩টি উপাদানের মেয়াদ শীঘ্রই শেষ হবে—দেশি টমেটো (২৪ ঘণ্টা), তরল দুধ (৪৮ ঘণ্টা), এবং ধনেপাতা (৪৮ ঘণ্টা)। এই উপাদানগুলো দিয়ে রেসিপি সাজেস্ট করতে পারেন।";
    } else {
      assistantResponse =
        "আমি আপনার PantryPal কিচেন অ্যাসিস্ট্যান্ট। আপনার রান্নাঘরের স্টক, মেয়াদোত্তীর্ণের অ্যালার্ট, সাপ্তাহিক মিল প্ল্যান কিংবা বাজারের ফর্দ তৈরিতে কীভাবে সাহায্য করতে পারি?";
    }

    return NextResponse.json({
      success: true,
      data: {
        role: "assistant",
        content: assistantResponse,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: { message: error.message } },
      { status: 500 }
    );
  }
}
