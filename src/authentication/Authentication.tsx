import React from "react";
import "../css/style.css";
import Login from "./Login";

function Authentication() {
  return (
    <div className="flex flex-row mx-[50px] my-0 items-center">
      <div className="flex-[0.5] text-center">
        {" "}
        {/* Use Tailwind utility class */}
        <img
          src="https://songjangmin.bates-catapult.net/media/albert.jpg"
          alt="Example"
          className="max-w-xs max-h-xs mt-40"
        />
      </div>
      <div className="flex-[0.5]">
        {" "}
        {/* Use Tailwind utility class */}
        <Login />
        <div className="border border-gray-1 divide-solid p-20 mx-30 text-center">
          <span className="font-medium text-[14px]">
            Don't have an account?{" "}
            <button className="bg-none text-[color:#0095f6] divide-solid">
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
