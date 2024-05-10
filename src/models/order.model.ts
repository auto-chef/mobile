export type OrderModel = {
  id: string;
  restaurant: RestaurantModel;
  price: number;
  items: {
    name: string;
    amount: number;
    price: number;
    extras?: {
      name: string;
      amount: number;
    }[];
  }[];
  status: OrderStatus;
};

export type OrderStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "DELIVERED";

export type RestaurantModel = {
  name: string;
  image_url: string;
  background_url: string;
};
