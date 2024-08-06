import "./SignUp.scss";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../InputField/InputField";
import ProductActionButton from "../../ProductActionButton/ProductActionButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false); //flag that tells whether there are any errors in authentication

  const navigate = useNavigate();
  const authenticationObject = {
    email: email,
    password: password,
  };
  async function handleSubmit(
    e,
    checkUserApi = "http://localhost:3000/api/add_user"
  ) {
    const response = await fetch(checkUserApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authenticationObject),
    });
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);
    if (responseData.isAccountCreated) {
      navigate("/");
    } else {
      setIsErrorMessageVisible(true);
    }
  }

  return (
    <form className='form signUp'>
      {console.log(authenticationObject)}

      <InputField
        for='mail'
        id='mail'
        placeholder='Email'
        name='mail'
        type='email'
        title='Email'
        icon={faEnvelope}
        ariarequired={true}
        arialabel='Email'
        passwordValidator={false}
        setEmail={setEmail}
      />
      <InputField
        for='password'
        id='password'
        placeholder='Password'
        name='password'
        type='password'
        title='Password'
        icon={faLock}
        arialabel='Password'
        ariarequired={true}
        passwordValidator={true}
        setPassword={setPassword}
      />
      {isErrorMessageVisible ? (
        <span className={`error-message`}>
          Already have an account associated with this email address
        </span>
      ) : (
        <></>
      )}
      <ProductActionButton
        buttonText='Sign Up'
        ariaLabel='Sign Up'
        title='Sign Up'
        onClick={handleSubmit}
      />
      <ul className='form__list'>
        <li className='form__list__listitem'>
          <a href='/' aria-label='Appstore' title='Appstore'>
            <img
              className='item'
              src='./assets/images/apple.svg'
              alt='apple logo'
            />
          </a>
        </li>
        <li className='form__list__listitem'>
          <a href='/' aria-label='facebook' title='facebook'>
            <img
              className='item'
              src='./assets/images/facebook-f.svg'
              alt='facebook logo'
            />
          </a>
        </li>
        <li className='form__list__listitem'>
          <a href='/' aria-label='playstore' title='playstore'>
            <img
              className='item'
              src='./assets/images/google.svg'
              alt='google logo'
            />
          </a>
        </li>
      </ul>
      <p className='form__account'>
        If you have an account?{" "}
        <Link
          to='/'
          aria-label='Sign In Here'
          title='Sign In Here'
          className='form__account__redirect'
        >
          Sign In here
        </Link>
      </p>
    </form>
  );
}

export default SignUp;
