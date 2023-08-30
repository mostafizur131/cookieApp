export const setCookie = async () => {
  const res = await fetch(
    "https://cookieapp131.netlify.app/api/cookie/setCookies"
  );

  if (!res.ok) {
    return new Error("Error fetching cookies", res.status);
  }
  return await res.json();
};
