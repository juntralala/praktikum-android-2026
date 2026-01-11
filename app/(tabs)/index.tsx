import Card from "@/components/Card";
import { Button } from "@react-navigation/elements";
import { ActivityIndicator, FlatList, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import datas from '@/assets/dataCard.json';
import { Button as RNPButton } from 'react-native-paper';
import { router } from "expo-router";

export default function Index() {
  return (
    <ScrollView>
      <View>
        {datas.posts.map((item, index) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} key={index} />)}

        <View style={{ borderBottomColor: "black", borderBottomWidth: 1, marginTop: 8, marginBottom: 8 }} />

        {/* <FlatList data={datas.posts} renderItem={({ item, index }) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} />} /> */}

        <Button onTouchMove={woi}>Hello</Button>
        <TextInput />
        <RNPButton onPress={() => {
          router.push("/todos");
        }}>
          <Text>Todolist</Text>
        </RNPButton>
        <ActivityIndicator />
      </View>
    </ScrollView>
  );
}

function woi() {
  alert("Woi");
}