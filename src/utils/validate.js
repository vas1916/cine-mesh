export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/.test(
    password
  );
  if (!isEmailValid) return "Email ID is not valid !";
  if (!isPasswordValid) return "Password doesn't meet criteria";
  return null;
};
