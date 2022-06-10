import jwt_decode from "jwt-decode";

export const auth = () => {
  const tkn = localStorage.getItem("twj");
  if (tkn) {
    jwt_decode(JSON.parse(tkn).token);
    return true;
  }
  return false;
}

export const role = () => {
  const user = localStorage.getItem("perState");
  const role = JSON.parse(user).user.role;
  return role;
}