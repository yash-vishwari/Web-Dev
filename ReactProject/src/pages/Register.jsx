import { useState } from "react";
import image from "../assets/image.png";
function Register() {

  const[fullName,setfullName] =useState('');
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
   const [confirmPassword, setconfirmPassword] = useState("");


  function sumbitForm(e)
  {
    e.preventDefault();
    console.log(
      fullName,
      email,
      phoneNumber,
      userName,
      password,
      confirmPassword,
    );

  }
  return (
    <>
      <p className="fw-bold fs-2 text-center mt-3">Registration Page</p>
      <div className="d-flex gap-3">
        <div className="w-75">
          <img src={image} alt="" className="img-fluid" />
        </div>

        <div className="vw-100 h-75">
          <form
            action=""
            className="form-control d-flex flex-column w-75 p-5 h-100 gap-5 m-4"
            onSubmit={sumbitForm}
          >
            {/* //creating stuff inside div as otherwise width of input vary  */}
            <div className="d-flex flex-column ">
              <label htmlFor="FullName" className="fw-semibold text-secondary">
                Full Name
              </label>
              <input
                type="text"
                id="FullName"
                value={fullName}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="Name.."
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="Email" className="fw-semibold text-secondary">
                Email{" "}
              </label>
              <input
                type="text"
                id="Email"
                value={email}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="Email address.."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="d-flex flex-column">
              <label
                htmlFor="PhoneNumber"
                className="fw-semibold text-secondary"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="PhoneNumber"
                value={phoneNumber}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="PhoneNumber.."
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
              />
            </div>

            {/* <div className="d-flex gap-1">
          <span>Gender :</span>
          <input type="radio" id="Male" name="gender" />
          <label htmlFor="Male">Male</label>

          <input type="radio" id="FeMale" name="gender" />
          <label htmlFor="FeMale">FeMale</label>

          <input type="radio" id="Others" name="gender" />
          <label htmlFor="Others">Others</label>
        </div> */}

            <div className="d-flex flex-column">
              <label htmlFor="userName" className="fw-semibold text-secondary">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="userName.."
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="Password" className="fw-semibold text-secondary">
                Password
              </label>
              <input
                type="text"
                id="Password"
                value={password}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="Password.."
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div className="d-flex flex-column">
              <label
                htmlFor="confirmPassword"
                className="fw-semibold text-secondary"
              >
                Confirm password
              </label>
              <input
                type="text"
                id="confirmPassword"
                value={confirmPassword}
                className="form-control border-0 border-bottom border-dark rounded-0"
                placeholder="Confirm Password.."
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary w-50 mx-auto">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
