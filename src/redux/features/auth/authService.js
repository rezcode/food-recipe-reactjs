import axios from "axios";

const register = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    userData
  );

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    userData
  );

  const userLogged = {
    id: response?.data?.data?.id,
    token: response?.data?.token,
  };

  return userLogged;
};

const authService = {
  register,
  login,
};

export default authService;
