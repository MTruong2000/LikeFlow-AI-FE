import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.BASE_URL_BE}v1/plans/active`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
      },
      cache: "no-store", // tránh bị cache khi fetch
    });

    const data = await res.json();

    if (data.status !== "success") {
      return NextResponse.json(
        {
          code: data.code || 400,
          status: "error",
          message: data.message || "Fetch plans failed",
        },
        { status: data.code || 400 }
      );
    }

    return NextResponse.json(
      {
        code: data.code || 200,
        status: "success",
        data: data.data, // danh sách plan active
      },
      { status: data.code || 200 }
    );
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
