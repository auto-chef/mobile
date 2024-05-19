import { NavigationProp, RouteProp, CompositeScreenProps } from "@react-navigation/native";
import { OrderModel } from "./models";

export type AppNavigation = {
  Welcome: undefined;
  SignIn: { email?: string };
  SignUp: undefined;
  RecoverPassword: { email?: string };
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

export type ScreenProps<ScreenName extends keyof AppNavigation = undefined> = {
  navigation: NavigationProp<AppNavigation, ScreenName>;
  route: RouteProp<AppNavigation, ScreenName>;
};
