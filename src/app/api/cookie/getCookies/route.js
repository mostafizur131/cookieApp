import { NextResponse } from "next/server";

export async function GET(req, res) {
  const getCookie = req.cookies.get("theme");

  return NextResponse.json([{ cookies: getCookie }], {
    status: 200,
  });
}
