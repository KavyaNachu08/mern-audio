import "./SignInPage.scss";
import SignIn from "../../components/SignForms/SignIn/SignIn";
import HeroText from "../../components/HeroText/HeroText";

function SignInPage() {
  return (
    <div className='page'>
      <HeroText />
      <SignIn />
    </div>
  );
}

export default SignInPage;
