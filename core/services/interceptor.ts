import axios from "axios";

const Interceptor = () => {
  axios.defaults.baseURL = "https://aisays-backend.vercel.app";
  return null;
};
export default Interceptor;
