import React, {useState} from "react";
import { withTitle } from "../hoc/with-title";
import withVisibility from "../hoc/with-visibility";
import { withTimer } from "../components/Timer";
import LabeledInput from "../components/LabeledInput";

const UserLoginScreen = ({ onLogIn }) => {
  //TODO: Initialize Here
  const [logInInfo,updateLogInInfo]=useState({
    email:'',
    password:'',
});


  const logIn = (e) => {
    e.preventDefault();
    onLogIn(logInInfo);
  };


  const handleLoginInput = (id, value) => {
    let newLogInInfo = {...logInInfo};
    newLogInInfo[id] = value;
    updateLogInInfo(newLogInInfo);
  };


  //let date=new Date();
  return (
    <div className="row">
      <div className="col col-6">
        <form onSubmit={logIn}>
          <LabeledInput onChange={handleLoginInput} id="email" label="E-mail" value={logInInfo.email}/>
          <LabeledInput
            onChange={handleLoginInput}
            id="password"
            label="Password"
            value={logInInfo.password}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
//export default BookListScreen;
export default withVisibility(withTitle(UserLoginScreen, "User Login Screen"));
