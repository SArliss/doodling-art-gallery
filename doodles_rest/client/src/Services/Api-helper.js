import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// AUTH

// LOGIN
export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  } catch (e) {
    console.log(e.response);
    if (e.response && e.response.status === 401) {
      return { errorMessage: `Email/password is incorrect, or user is already loggedin!` };
    }
  }
}

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/register', registerData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return { errorMessage: "Email is already associated with a user, please login to continue" }
    }
  }
}

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

// GET ALL CATEGORIES
export const getAllCategories = async () => {
  const resp = await api.get(`/categories`);
  return resp.data;
}

// GET CATEGORIES BY ID
export const getOneCategories = async (categoryId) => {
  const resp = await api.get(`/categories/${categoryId}`);
  return resp.data;
}

// GET ALL PUBLIC DOODLES
export const indexDoodles = async () => {
  const resp = await api.get(`/doodles`);
  return resp.data;
}

// GET ALL PUBLIC DOODLES BY CAT
export const indexDoodlesCat = async (categoryId) => {
  const resp = await api.get(`/doodles/${categoryId}`);
  return resp.data;
}

// GET ALL USER DOODLES 
export const userAllDoodles = async () => {
  const resp = await api.get(`/user/doodles`);
  return resp.data;
}

// GET ALL USER DOODLES BY CAT
export const userDoodlesCat = async (categoryId) => {
  const resp = await api.get(`/categories/${categoryId}/recipes`);
  return resp.data;
}

// GET ONE USER DOODLES BY CAT
export const userOneDoodles = async (categoryId, doodleId) => {
  const resp = await api.get(`/categories/${categoryId}/recipes/${doodleId}`);
  return resp.data;
}
