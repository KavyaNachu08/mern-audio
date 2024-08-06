import "./SignIn.scss";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../InputField/InputField";
import ProductActionButton from "../../ProductActionButton/ProductActionButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SignIn() {
  const [email, setEmail] = useState(""); //email state
  const [password, setPassword] = useState(""); //password state
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false); //flag that tells whether there are any errors in authentication

  const navigate = useNavigate(); //use navigate hook

  const authenticationObject = {
    email: email,
    password: password,
  }; //object that is sent in the request body

  async function handleSubmit() {
    const response = await fetch("http://localhost:3000/api/validate_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authenticationObject),
    });
    let responseData = await response.json();

    //condition for whether login was successful
    if (responseData.isLoggedIn) {
      navigate("/home");
    } else {
      setIsErrorMessageVisible(true);
    }
  }

  return (
    <form className='form'>
      <InputField
        for='mail'
        id='mail'
        placeholder='Email'
        name='mail'
        type='email'
        icon={faEnvelope}
        title='Email'
        arialabel='Email'
        ariarequired={true}
        autocomplete='username'
        setEmail={setEmail}
      />
      <InputField
        for='password'
        id='password'
        placeholder='Password'
        name='password'
        type='password'
        icon={faLock}
        title='Password'
        arialabel='Password'
        ariarequired={true}
        autocomplete='current-password'
        setPassword={setPassword}
      />
      {isErrorMessageVisible ? (
        <span className={`error-message`}>Incorrect username/password</span>
      ) : (
        <></>
      )}

      <a
        href='/'
        aria-label='Forgot Password'
        title='Forgot Password'
        className='form__forgot'
      >
        Forgot Password
      </a>
      <ProductActionButton
        buttonText='Sign In'
        aria-label='Sign In'
        title='Sign In'
        onClick={handleSubmit} 
      />
      <p className='form__account'>
        Didn't have an account?{" "}
        <Link
          to='/signup'
          aria-label='Sign Up Here'
          title='Sign Up Here'
          className='form__account__redirect'
        >
          {" "}
          Sign Up here
        </Link>
      </p>
    </form>
  );
}

export default SignIn;
