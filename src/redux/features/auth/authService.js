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
    name: response?.data?.data?.name,
    email: response?.data?.data?.email,
    image_profile: response?.data?.data?.image_profile,
    phone_number: response?.data?.data?.phone_number,
  };

  return userLogged;
};

const getUser = async (body) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${body.id}`,
    body.config
  );

  return response.data;
};

const authService = {
  register,
  login,
  getUser,
};

export default authService;
