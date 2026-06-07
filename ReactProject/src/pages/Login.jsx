import { useState } from "react";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="UserName">Username :</label>
          <input
            type="text"
            id="UserName"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="PassWord">Password :</label>
          <input
            type="text"
            id="PassWord"
            value={password}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}

export default Login;
