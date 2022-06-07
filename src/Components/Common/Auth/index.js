import jwt_decode from "jwt-decode";

export const auth = () => {
  const tkn = localStorage.getItem("twj");
  if (tkn) {
    jwt_decode(JSON.parse(tkn).token);
    return true;
  }
  return false;
}