import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { MD3LightTheme, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const myTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#0E21A0",
    primaryContainer: "#d8dcf1ff",
    onPrimary: "#fafbffff",
    onPrimaryContainer: "#0d0d0fff",
    inversePrimary: "#d8dcf1ff",
    secondary: "#4D2FB2",
    surface: "#B153D7",
    backdrop: "#F375C2"
  }
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider theme={myTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false,
            statusBarHidden: false,
            // header: (a: any) => (
            //   <SafeAreaView style={{margin: 0}}>
            //   <View style={{backgroundColor: "blue" }}>
            //     <Text>{a.route.name}</Text>
            //   </View>
            //   </SafeAreaView>
            // )
          }} />
          <Stack.Screen name="details/[id]" options={{
            headerTitle: "Detail",
            headerTransparent: true,
            headerTintColor: "#fff",
          }} />
          <Stack.Screen name="todos/index" options={{ headerTitle: "Todo List" }} />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
}
