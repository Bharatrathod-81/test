export const storeToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getToken = () => {
  return localStorage.getItem("accessToken");
};


export const storeUserDetail = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserDetail = () => {
  return localStorage.getItem("user") === "undefined" ? undefined : localStorage.getItem("user");
};

export const storeUserProfile = (data) => {
  localStorage.setItem("Userdetails", JSON.stringify(data));
};

export const getUserProfile = () => {
  return localStorage.getItem("Userdetails");
};

export const storeUserImage = (files) => {
  localStorage.setItem("Userimage", JSON.stringify(files));
};

export const getUserImage = () => {
  return localStorage.getItem("Userimage");
};

