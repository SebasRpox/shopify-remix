import { getOrderDetails } from "../mysql.connection.js";

export const loader = async () => {
  const orderDetail = await getOrderDetails();
  console.log(orderDetail);
};
