import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTitle: "Home",
        title: "Home",
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={18} color={color} />
        )
      }} />
      <Tabs.Screen name="restaurants" options={{
        title: "Restoran",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="users" size={18} color={color} />
        )
      }}/>
      <Tabs.Screen name="about" options={{
        title: "About",
        tabBarIcon: ({ color }) => (
          <AntDesign name="info-circle" size={18} color={color} />
        )
      }}/>
    </Tabs>
  );
}
