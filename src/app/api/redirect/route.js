import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.redirect(
    "https://cookieapp131.netlify.app/displaycookie"
  );
}
