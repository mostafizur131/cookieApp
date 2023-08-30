import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Cookie APP</h1>
          <p className="py-6">
            <>
              <dl>
                <dt className="text-3xl">Api 1: Cookies</dt>
                <dd>http://localhost:3000/api/cookie/setCookie</dd>
                <dd>http://localhost:3000/api/cookie/getCookie</dd>

                <dt className="text-3xl">Api 2: Header Modification</dt>
                <dd>http://localhost:3000/api/headerModification</dd>

                <dt className="text-3xl">Api 3: Json Response</dt>
                <dd>http://localhost:3000/api/jsonResponse</dd>

                <dt className="text-3xl">Api 4: Redirect</dt>
                <dd>http://localhost:3000/api/redirect</dd>
              </dl>
            </>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
