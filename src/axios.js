import Axios from "axios";
Axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_SERVER}/api/`;
const Request = async (url) => {
  return Axios.get(url).then((res) => res.data.result);
};
export default Request;
