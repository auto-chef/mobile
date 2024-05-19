import { api } from "../../services/api";

import { RestaurantModel, type OrderModel, type OrderStatus } from "@/models";

export async function getRestaurantsRequest() {
  return await api.get<RestaurantModel[]>("/restaurants");
}

export async function getOrdersRequest(status: OrderStatus) {
  return await api.get<OrderModel[]>(`/orders/${status}`);
}
