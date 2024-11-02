import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const webhookToken = process.env.WEBHOOK_TOKEN;

  if (!authHeader || authHeader !== `Bearer ${webhookToken}`) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
    });
  }

  const path = req.nextUrl.searchParams.get("path");

  if (path === "posts") {
    await revalidatePath("/blog/[slug]", "layout");
    return new Response(
      JSON.stringify({ revalidated: true, now: Date.now() }),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({
      revalidated: false,
      now: Date.now(),
      message: "Missing or incorrect path to revalidate",
    }),
    { status: 400 }
  );
}
