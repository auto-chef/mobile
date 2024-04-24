import { OrderModel } from "./models";

declare module "@env" {
  export const GOOGLE_MAPS_API_KEY: string;
  export const GOOGLE_GEMINI_API_KEY: string;
}

export type AppNavigation = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  RecoverPassword: undefined;
  Home: undefined;
  OrderMap: OrderModel;
  OrderDetails: OrderModel;
  ChefIAModal: { restaurant: string } | undefined;
  SignOutModal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AppNavigation {}
  }
}
