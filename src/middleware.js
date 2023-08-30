import { NextResponse } from "next/server";

export function middleware(req, res) {
  const reqHeader = new Headers(req.headers);
  reqHeader.set("bearer", "tahsin131");
  if (req.nextUrl.pathname.startsWith("/api/headerModification")) {
    const bearerToken = reqHeader.get("bearer");

    if (bearerToken === "tahsin131") {
      reqHeader.set("user_id", "131");
      reqHeader.set("email", "tahsin131@gmail.com");
      return NextResponse.next({
        request: { headers: reqHeader },
      });
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  }
}
