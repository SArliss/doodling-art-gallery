import axios from 'axios';

const api = axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "https://shrouded-garden-55385.herokuapp.com"
})

// AUTH

// LOGIN
export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/auth/login', loginData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('id', resp.data.user.id);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  } catch (e) {
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
export const getOneCategory = async (categoryId) => {
  const resp = await api.get(`/categories/${categoryId}`);
  return resp.data;
}

// GET ALL PUBLIC DOODLES
export const getPublicDoodles = async () => {
  const resp = await api.get(`/doodles`);
  return resp.data;
}

// GET ALL PUBLIC DOODLES BY CAT
export const getDoodleByCat = async (categoryId) => {
  const resp = await api.get(`/doodles/${categoryId}`);
  return resp.data;
}

// GET ALL USER DOODLES 
export const getAllUserDoodles = async () => {
  const resp = await api.get(`/user/doodles`);
  return resp.data;
}

// GET ALL USER DOODLES BY CAT
export const getUserDoodlesByCat = async (categoryId) => {
  const resp = await api.get(`/categories/${categoryId}/doodles`);
  return resp.data;
}

// GET ONE USER DOODLES BY CAT
export const getOneUserDoodle = async (categoryId, doodleId) => {
  const resp = await api.get(`/categories/${categoryId}/doodles/${doodleId}`);
  return resp.data;
}

// CREATE A DOODLE
export const createDoodleCall = async (categoryId, postData) => {
  const resp = await api.post(`/categories/${categoryId}/doodles`, postData);
  return resp.data;
}

export const updateDoodle = async (categoryId, doodleId, postData) => {
  const resp = await api.put(
    `/categories/${categoryId}/doodles/${doodleId}`,
    postData
  );
  return resp;
};

export const deleteDoodleCall = async (categoryId, doodleId) => {
  const resp = await api.delete(
    `/categories/${categoryId}/doodles/${doodleId}`
  );
  return resp.data;
};
