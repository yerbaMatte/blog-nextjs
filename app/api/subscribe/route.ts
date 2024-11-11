import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  const strapiURL = `${process.env.NEXT_PUBLIC_API_URL}/api/subscriber/subscribe`;

  try {
    const response = await fetch(strapiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: responseData.message || "Subscription failed",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: responseData.message || "Subscription successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing email:", error);
    return NextResponse.json(
      { success: false, message: "Server error during subscription." },
      { status: 500 }
    );
  }
}
