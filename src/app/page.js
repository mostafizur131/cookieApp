import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Cookie APP</h1>
          <div className="py-6">
            <>
              <dl>
                <dt className="text-3xl">Api 1: Cookies</dt>
                <dd>https://cookieapp131.netlify.app/api/cookie/setCookie</dd>
                <dd>https://cookieapp131.netlify.app/api/cookie/getCookie</dd>

                <dt className="text-3xl">Api 2: Header Modification</dt>
                <dd>https://cookieapp131.netlify.app/api/headerModification</dd>

                <dt className="text-3xl">Api 3: Json Response</dt>
                <dd>https://cookieapp131.netlify.app/api/jsonResponse</dd>

                <dt className="text-3xl">Api 4: Redirect</dt>
                <dd>https://cookieapp131.netlify.app/api/redirect</dd>
              </dl>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
