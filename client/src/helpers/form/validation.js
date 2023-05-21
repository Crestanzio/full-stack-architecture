import { uperrCaseRegex, numberRegex, specialCharactersRegex, usernameRegex, passwordLengthRegex } from "./rules";
 
function usernameErrorMessage(username) {
  if (!usernameRegex.exec(username)) {
    return "4 - 15 characters";
  }
}

function passwordErrorMessage(password) {
  if (!uperrCaseRegex.exec(password)) {
    return "At least 1 uppercase letter";
  } 
  else if (!numberRegex.exec(password)) {
    return "At least 1 number";
  } 
  else if (!specialCharactersRegex.exec(password)) {
    return "At least 1 special character";
  } 
  else if (!passwordLengthRegex.exec(password)) {
    return "8 - 15 characters";
  }
}

export { usernameErrorMessage, passwordErrorMessage };