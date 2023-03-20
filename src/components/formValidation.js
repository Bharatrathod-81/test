
const FormValidation = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (!data.username) {
      errors.username = "What shall we call you, stranger?";
    };

    if (!data.email) {
      errors.email = "Error 404: Email not found. Want to sign up with it anyway?";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Enter your valid email - We promise not to spam you... much!";
    }

    if (!data.password) {
      errors.password = "Password, please. We won't peek... much!";
    } else if (data.password.length < 8) {
      errors.password = "Uh-oh, password too short. Min 8 characters or bust!";
    } else if (data.password.length > 16) {
      errors.password = "Uh-oh, password too short. Max 16 characters or bust!";
    } else if (!passwordRegex.test(data.password)) {
      errors.password = "Please Enter Valid Password!"
    };
    
    if (!data.conformPassword) {
      errors.conformPassword = "Conform Your Password!";
    } else if (!(data.conformPassword === data.password)) {
      errors.conformPassword = "Password mismatch! Did you forget your morning coffee?";
    }
 
    return errors;
}

export default FormValidation;
