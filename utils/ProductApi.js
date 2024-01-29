const { default: axiosClient } = require("./axiosClient");

const getLatesProducts = () => axiosClient.get("/products?populate=*");
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

export default { getLatesProducts, getProductById };
