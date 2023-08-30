import { NextResponse } from "next/server";

export async function GET(req, res) {
  // Get the Authorization header from the request.
  const authorizationHeader = req.headers.get("Authorization");

  // If the Authorization header is not present, return a 401 Unauthorized error.
  if (!authorizationHeader) {
    res.status(401).send("Unauthorized");
    return;
  }

  // Extract the token from the Authorization header.
  const token = authorizationHeader.split(" ")[1];

  // Prefix the token with "Bearer ".
  const bearerToken = `Bearer ${token}`;

  // Add the Bearer token as a new Authorization header.
  res.headers.set("Authorization", bearerToken);

  // Continue the request by calling NextResponse.next().
  NextResponse.next();
}
