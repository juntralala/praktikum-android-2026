import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { MD3LightTheme, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider theme={MD3LightTheme}>
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
