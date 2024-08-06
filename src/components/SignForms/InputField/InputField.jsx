import { useState } from "react";
import "./InputField.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputField(props) {
  let forValue = props.for;
  let type = props.type;
  let id = props.id;
  let nameValue = props.name;
  let placeholder = props.placeholder;
  let icon = props.icon;
  let title = props.title;
  let arialabel = props.arialabel;
  let required = props.ariarequired;
  let autocomplete = props.autocomplete;
  let passwordValidator = props.passwordValidator;

  let setEmail = props.setEmail;
  let setPassword = props.setPassword;

  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState();

  function handleChange(e) {
    if (type === "password" && passwordValidator === true) {
      let new_pass = e.target.value;
      var lowerCase = /[a-z]/g;
      if (new_pass.length < 3) {
        setErrorMessage("Password length is less than 3");
      } else if (!new_pass.match(lowerCase)) {
        setErrorMessage("Password should have only lowercase");
      } else {
        setErrorMessage("Password is strong");
        setShow("show");
      }
    }
    if (type === "password") {
      let new_pass = e.target.value;
      setPassword(new_pass);
    }
    if (type === "email") {
      let new_email = e.target.value;
      setEmail(new_email);
    }
  }

  return (
    <div className='form__input' tabIndex='0'>
      <label aria-hidden='true' for={forValue}></label>
      <FontAwesomeIcon className='form__input__icon' icon={icon} />
      <input
        type={type}
        id={id}
        name={nameValue}
        placeholder={placeholder}
        title={title}
        aria-label={arialabel}
        aria-required={required}
        auto-complete={autocomplete}
        passwordValidator={passwordValidator}
        required
        onChange={handleChange}
      ></input>
      {errorMessage && (
        <span className={`form__input__errorMessage ${show}`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default InputField;
