import SignUpForm from "../../components/sign-up/sign-up-form";
import SignInForm from "../../components/sign-in/sign-in-form";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
