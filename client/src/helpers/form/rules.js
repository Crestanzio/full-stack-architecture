// Rules by characters
export const uperrCaseRegex = /.*[A-Z]/
export const lowerCaseRegex = /.*[a-z]/
export const numberRegex = /.*\d/
export const specialCharactersRegex = /[-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/
export const passwordLengthRegex = /^.{8,15}$/

// Rules by Input type
export const usernameRegex = /^.{4,15}$/
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,15}$/