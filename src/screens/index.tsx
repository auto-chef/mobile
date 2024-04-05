import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RecoverPasswordScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from "./auth";
import { ChefIAModal } from "./modals";
import { HomeScreen, OrderDetailsScreen } from "./orders";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Group>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPasswordScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
        <Stack.Screen
          name="ChefIAModal"
          options={{ animation: "slide_from_bottom" }}
          component={ChefIAModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
