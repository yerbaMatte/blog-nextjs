"use server";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  const strapiURL = `${process.env.NEXT_PUBLIC_API_URL}/api/subscriber/verify/${token}`;

  try {
    const response = await fetch(strapiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message,
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.json(
      { success: false, message: "Server error during verification." },
      { status: 500 }
    );
  }
}
