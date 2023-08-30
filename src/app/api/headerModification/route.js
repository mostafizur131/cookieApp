import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const headerList = headers();

  const userId = headerList.get("user_id");
  const email = headerList.get("email");
  return NextResponse.json({ userId: userId, email: email });
}
