import Card from "@/components/Card";
import { Button } from "@react-navigation/elements";
import { ActivityIndicator, FlatList, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";
import datas from '@/assets/dataCard.json';
import { Button as RNPButton } from 'react-native-paper';
import { router } from "expo-router";
import Reanimated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { useEffect, useState } from "react";

export default function Index() {
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotation.value}deg`}]
  }));
  const [isTornado, setIsTornado] = useState(true);

  useEffect(() => {
    if(isTornado) {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 1000,
          easing: Easing.linear,
        }),
        -1,     // -1 = infinite
        false  // no reverse
      );
    }
  }, []);

  return (
    <ScrollView>
      <View style={{alignItems: "center", justifyContent: "flex-end", flexDirection: "row"}}>
        <Text>Puter</Text>
        <Switch value={isTornado} onValueChange={() => setIsTornado(!isTornado)}/>
      </View>
      <View>
        {datas.posts.map((item, index) => (
          <Reanimated.View style={[animatedStyle]} key={item.id}>
            <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} key={index} />
          </Reanimated.View>
          ))}

        <View style={{ borderBottomColor: "black", borderBottomWidth: 1, marginTop: 8, marginBottom: 8 }} />

        {/* <FlatList data={datas.posts} renderItem={({ item, index }) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} />} /> */}
        
        <Reanimated.View style={[animatedStyle]}>
        <Button onTouchMove={woi}>Hello</Button>
        </Reanimated.View>
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