import { useState } from "react";
import { Button, Image, Modal, Pressable, Switch, Text, View } from "react-native";
import MyModal from "./MyModal";

export default function () {
  const [modalVisible, setModalVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <>
      <View style={{ margin: 8 }}>
        <View style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center"
        }}>
          <Image style={{ borderRadius: 100, width: 80, height: 80 }} source={{ uri: "https://mirzayogy.github.io/assets/image/snappy.png" }} />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Anu Professor</Text>
            <Text>anu@gmail.com</Text>
            <Text>12312121</Text>
          </View>
        </View>
        <Button title="Tampilkan Modal" onPress={() => setModalVisible(true)} />
        <Switch value={switchValue} onValueChange={value => setSwitchValue(value)}/>
      </View>
      <MyModal visible={modalVisible} onClose={(visible: boolean) => setModalVisible(false)}></MyModal>
    </>
  );
}