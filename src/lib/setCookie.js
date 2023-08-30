export const setCookie = async () => {
  const res = await fetch("http://localhost:3000/api/cookie/setCookies");

  if (!res.ok) {
    return new Error("Error fetching cookies", res.status);
  }
  return await res.json();
};
