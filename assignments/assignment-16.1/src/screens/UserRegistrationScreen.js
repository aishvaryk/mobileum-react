import React, { useState } from "react";
import { withTitle } from "../hoc/with-title";
import withVisibility from "../hoc/with-visibility";
import LabeledInput from "../components/LabeledInput";

const UserRegistrationScreen = ({ onSignUp }) => {
  const [signUpInfo, updateSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = (e) => {
    e.preventDefault();
    onSignUp(signUpInfo);
  };

  const handleSignUpInput = (id, value) => {
    let newSignUpInfo = { ...signUpInfo };
    newSignUpInfo[id] = value;
    updateSignUpInfo(newSignUpInfo);
  };

  return (
    <div className="row">
      <div className="col col-6">
        <form onSubmit={signUp}>
          <LabeledInput
            onChange={handleSignUpInput}
            id="name"
            label="Name"
            value={signUpInfo.name}
          />
          <LabeledInput
            onChange={handleSignUpInput}
            id="email"
            label="E-mail"
            value={signUpInfo.email}
          />
          <LabeledInput
            onChange={handleSignUpInput}
            id="password"
            label="Set a New Password"
            value={signUpInfo.password}
          />
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
//export default BookListScreen;
export default withVisibility(
  withTitle(UserRegistrationScreen, "User Registration Screen")
);
