import { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singUpRequest } from "../../requests/signup";
import { LOGIN, RESET_PASSWORD } from "../../constants/routes";
import { usernameErrorMessage, passwordErrorMessage } from "../../helpers/form/validation";
import { usernameRegex, passwordRegex } from "../../helpers/form/rules";
import styles from "./signup.module.css";

function SignUp() {
  
  const location = useLocation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<BsEye />);
  const isInvalid = !usernameRegex.test(username) || !passwordRegex.test(password);

  const handleUsername = (event) => setUsername(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value);
  const handleRememberMe = () => setRememberMe(!rememberMe);
  
  const handleUsernameError = () => setUsernameError(usernameErrorMessage(username));
  const handlePasswordError = () => setPasswordError(passwordErrorMessage(password));
  
  const togglePasswordType = () => passwordType === 'password' ?
   setPasswordType('text') & setPasswordIcon(<BsEyeSlash />) : setPasswordType('password') & setPasswordIcon(<BsEye />);
   
  const invalidUsernameErrorClass = username ? "input_error" : null;
  const invalidPasswordErrorClass = password ? "input_error" : null;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(singUpRequest({username, password}));
  };
  
  useEffect(() => {
    if (location.pathname.includes(LOGIN)) {
      document.title = "Redux • Login";
    }
  }, [location]);

  return (
    <form onSubmit={handleLogin} method="POST">
      <div className={styles.logo}>
        <img src="https://via.placeholder.com/350x150" alt="" loading="lazy" />
      </div>
      <div className={styles.content}>
        <div className={styles.tooltip}>
          <input className={invalidUsernameErrorClass} value={username} onChange={handleUsername} onKeyUp={handleUsernameError} name="username"  placeholder="Username" type="text" pattern="^.{4,15}$" autoComplete="off" required />
          {usernameError && username ? <p className={styles.tooltip_error}>{usernameError}</p> : null}
        </div>
        <div className={styles.tooltip}>
          <input className={invalidPasswordErrorClass} value={password} onChange={handlePassword} onKeyUp={handlePasswordError} name="password" placeholder="Password" type={passwordType} pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,15}$" required />
          <span onClick={togglePasswordType}>{passwordIcon}</span>
          {passwordError && password ? <p className={styles.tooltip_error}>{passwordError}</p> : null}
        </div>
        <button disabled={isInvalid} type="submit">Login</button>
        <div className={styles.remember_me}>
          <input onClick={handleRememberMe} type="checkbox" defaultChecked />
          <label>Remember me</label>
        </div>
        <div className={styles.links}>
          <Link to={RESET_PASSWORD}>Forgot password?</Link>
          <p className={styles.links}>You have an acount? <Link to={LOGIN}>Login</Link></p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;