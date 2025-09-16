import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { code: 401, status: "error", message: "Phiên đăng nhập không hợp lệ" },
        { status: 401 }
      );
    }

    // Lấy body từ request
    const body = await req.json();

    const res = await fetch(`${process.env.BASE_URL_BE}v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.status !== "success") {
      return NextResponse.json(
        {
          code: data.code || 400,
          status: "error",
          message: data.message || "Order creation failed",
        },
        { status: data.code || 400 }
      );
    }

    console.log("API /orders response:", data);

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API /orders error:", err);
    return NextResponse.json(
      { code: 500, status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
