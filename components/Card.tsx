import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface Props {
  id: number,
  sumberGambar: string,
  judul: string,
  keterangan: string,
}

function handlePress(id: number) {
  router.push({
    pathname: "/details/[id]",
    params: {id: id}
  });
}

export default function Card({id, sumberGambar, judul, keterangan }: Props) {
  return (
    <Pressable onPress={() => handlePress(id)}>
      <View style={{
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 10,
        borderRadius: 5,
        margin: 5,
        gap: 8,
        flexDirection: 'row',
      }}>
        <Image style={{ width: 70, height: 70, borderRadius: 8}} source={sumberGambar} />
        <View style={{paddingEnd: 75}}>
          <Text style={{ color: 'white' }}>{judul}</Text>
            <Text 
              style={{ color: 'white', fontSize: 12 }} 
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {keterangan}
            </Text>
        </View>
      </View>
    </Pressable>
  );
}