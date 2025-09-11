import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { status: "error", message: "No token found" },
        { status: 401 }
      );
    }

    const res = await fetch("http://192.168.1.25:8080/v1/users/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Fetch profile error:", err);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
