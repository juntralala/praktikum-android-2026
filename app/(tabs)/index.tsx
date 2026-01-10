import Card from "@/components/Card";
import { Button } from "@react-navigation/elements";
import { FlatList, ScrollView, TextInput, View } from "react-native";
import datas from '@/assets/dataCard.json';

export default function Index() {
  return (
    <ScrollView>
      <View>
        {datas.posts.map((item, index) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} key={index} />)}

        <View style={{ borderBottomColor: "black", borderBottomWidth: 1, marginTop: 8, marginBottom: 8 }} />

        {/* <FlatList data={datas.posts} renderItem={({ item, index }) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} />} /> */}

        <Button onTouchMove={woi}>Hello</Button>
        <TextInput />
      </View>
    </ScrollView>
  );
}

function woi() {
  alert("Woi");
}