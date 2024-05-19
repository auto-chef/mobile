import { OrderModel } from "./models";

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
