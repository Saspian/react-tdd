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
  const persistenceState = localStorage.getItem("perState");
  const rawRole = JSON.parse(persistenceState);
  const role = rawRole?.user?.role ? rawRole.user.role : 'guest';
  return role;
}