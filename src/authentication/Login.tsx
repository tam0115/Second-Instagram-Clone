import React from "react";
import "../css/style.css";

function Login() {
  return (
    <div className="flex flex-col border border-gray-1 divide-solid p-50 mx-30">
      <img
        className="w-25 mx-auto my-40"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrtvnQiTLIYhDaF48OGgzvBknVTd1IEFdlg&usqp=CAU"
        alt=""
      />
      <input type="email" placeholder="Email" className="bg-[#fffff24]" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  );
}

export default Login;
