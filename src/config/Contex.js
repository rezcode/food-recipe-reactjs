import React from "react";

export const ProfileContex = React.createContext({
  id: localStorage.getItem("id"),
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email"),
  token: localStorage.getItem("token"),
  phoneNumber: localStorage.getItem("phoneNumber"),
  imageProfile: localStorage.getItem("imageProfile"),
});
