import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await fetch("http://192.168.1.25:8080/v1/users/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept-Language": "en-US", 
       },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.status !== "success" || !data.data?.data) {
      return NextResponse.json(
        { success: false, message: data.message || "Login failed" },
        { status: data.code || 400 }
      );
    }

    const token = data.data.data;

    const response = NextResponse.json({
      success: true,
      message: data.message,
    });

    response.cookies.set({
      name: "access_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 28,
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
