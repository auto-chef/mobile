export type OrderModel = {
  id: string;
  restaurant: {
    name: string;
    image_url: string;
    background_url: string;
  };
  price: number;
  items: {
    name: string;
    amount: number;
    extras?: {
      name: string;
      amount: number;
    }[];
  }[];
  status: OrderStatus;
};

export type OrderStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "DELIVERED";
