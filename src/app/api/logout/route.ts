import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = NextResponse.json({ success: true });

  // Xóa cookie bằng cách set lại với maxAge = 0
  response.cookies.set({
    name: "access_token",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return response;
}
