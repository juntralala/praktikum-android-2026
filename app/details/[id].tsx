import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import data from "@/assets/dataCard.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = data.posts.find((post: { id: number, sumberGambar: string, judul: string, keterangan: string }) => post.id == +id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1 }}>
        <Image style={{ width: "100%", height: "60%" }} source={post?.sumberGambar} />
        <View style={{ padding: 24, borderTopStartRadius: 40, borderEndStartRadius: 40, backgroundColor: "white", height: "100%", position: "relative", top: -35}}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>{post?.judul}</Text>
          <Text style={{}}>{post?.keterangan}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}