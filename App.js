import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native"; // Import useNavigatio
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import "./assets/ant-design_arrow-left-outlined.png";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            headerTitle: "",

            header: () => (
              <View style={styles.containerHeaderStyle}>
                <Image
                  style={styles.imgSize}
                  source={"./assets/ant-design_arrow-left-outlined.png"}
                ></Image>
                <Text style={{ color: "white" }}>CHAT</Text>
                <Image
                  style={styles.imgSize}
                  source={"./assets/bi_cart-check.png"}
                ></Image>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerTitle: "",

            header: () => (
              <View style={styles.containerHeaderStyle}>
                <Image
                  style={styles.imgSize}
                  source={"./assets/ant-design_arrow-left-outlined.png"}
                ></Image>
                <Text style={{ color: "white" }}>CHAT</Text>
                <Image
                  style={styles.imgSize}
                  source={"./assets/bi_cart-check.png"}
                ></Image>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerHeaderStyle: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },

  imgSize: {
    width: 40,
    height: 30,
  },
});
