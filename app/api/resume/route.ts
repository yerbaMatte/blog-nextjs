export async function GET() {
  try {
    const strapiURL = `${process.env.NEXT_PUBLIC_API_URL}/uploads/ENG_Milosz_Lewandowski_Frontend_Developer_resume_b44707c392.pdf`;

    const response = await fetch(strapiURL);

    if (!response.ok) {
      throw new Error("Failed to fetch.");
    }

    const fileBuffer = await response.arrayBuffer();

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch the resume PDF" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
