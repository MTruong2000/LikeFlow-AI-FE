import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, email } = body;

    const res = await fetch(
      `${process.env.BASE_URL_BE}v1/users/verify-email?code=${code}&email=${encodeURIComponent(
        email
      )}`,
      {
        method: "GET",
        headers: {
          "Accept-Language": "en-US",
        },
      }
    );

    const data = await res.json();

    if (data.status !== "success" || !data.data?.data) {
      return NextResponse.json(
        {
          code: data.code || 400,
          status: "error",
          message: data.message || "Mã xác thực không hợp lệ",
        },
        { status: data.code || 400 }
      );
    }

    // ✅ Đúng
    const jwtToken = data.data.data;

    const response = NextResponse.json(
      {
        code: data.code || 200,
        status: "success",
        message:
          data.message ||
          "Xác minh email thành công. Vui lòng đăng nhập để tiếp tục.",
        data: {
          result: "success",
          data: jwtToken,
        },
      },
      { status: 200 }
    );

    // 👉 Lưu token vào cookie nếu muốn
    response.cookies.set({
      name: "access_token",
      value: jwtToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 28, // 28 ngày
    });

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
