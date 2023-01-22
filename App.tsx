import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import mainScreen from "./src/screens/mainScreen";

const navigator = createStackNavigator(
  {
    Main: mainScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "myProject",
      headerTintColor: "white",
      headerStyle: { elevation: 0, backgroundColor: "#283655" },

      cardStyle: { backgroundColor: "grey" },
    },
  }
);

export default createAppContainer(navigator);
