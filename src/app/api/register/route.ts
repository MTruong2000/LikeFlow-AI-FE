import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await fetch(`${process.env.BASE_URL_BE}v1/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    // Nếu API trả lỗi
    if (data.status !== "success" || !data.data?.id) {
      return NextResponse.json(
        {
          code: data.code || 400,
          status: "error",
          message: data.message || "Register failed",
        },
        { status: data.code || 400 }
      );
    }

    // Thành công
    const response = NextResponse.json(
      {
        code: data.code || 200,
        status: "success",
      },
      { status: data.code || 200 }
    );

    // Nếu vẫn cần set token thì giữ lại đoạn này
    if (data.data?.token) {
      response.cookies.set({
        name: "access_token",
        value: data.data.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 28,
      });
    }

    return response;
  } catch (err) {
    return NextResponse.json(
      {
        code: 500,
        status: "error",
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
