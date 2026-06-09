import { useState } from "react";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  function submitFunc(e)
  {
    e.preventDefault();
    console.log(userName, password);
  }
  return (
    <>
      <form
        action=""
        onSubmit={submitFunc}
        className="form-control d-flex  vh-100 justify-content-center bg-info-subtle"
      >
        <div className="d-flex flex-column gap-3 align-items-center mt-5">
          <p className="fs-1 fw-bold text-primary">Login Page</p>
          <div>
            <label htmlFor="UserName">Username :</label>
            <input
              type="text"
              id="UserName"
              value={userName}
              class="form-control"
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
              class="form-control"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
