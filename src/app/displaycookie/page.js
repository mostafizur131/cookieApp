import { cookies } from "next/headers";

const DisplayCookie = () => {
  const cookieStore = cookies();
  const cookie = cookieStore.get("theme");

  return (
    <div className="container mx-auto py-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">Display Cookie</h1>
        <div className="mt-5">
          <p className="text-2xl font-semibold mb-2">
            Cookie Name:{" "}
            <span className="text-red-500">
              {cookie ? cookie.name : "Cookie is not set"}
            </span>
          </p>
          <p className="text-2xl font-semibold">
            Cookie Value:{" "}
            <span className="text-red-500">
              {cookie ? cookie.value : "Cookie is not set"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCookie;
