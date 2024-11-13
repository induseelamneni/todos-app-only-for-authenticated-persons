export const checkValidations = (email,password) => {
    // const isNameValid = /^[a-z ,.'-]+$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    // if (!isNameValid) return "Please Check your Name"
    if(!isEmailValid) return "Please Check Email"
    if(!isPasswordValid) return "Please Check Password"

    return null
}