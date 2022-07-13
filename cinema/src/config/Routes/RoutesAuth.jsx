import { Redirect, Route } from "react-router-dom";
import SignIn from "../../components/Authetication/SignIn";
import Signup from "../../components/Authetication/Signup";

const RoutesAuth = () => {
  return (
    <>
      {" "}
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/Login" component={SignIn} exact />
      <Route path="/Signup" component={Signup} exact />

    </>
  );
};

export default RoutesAuth;
