import { Button, Modal, Pressable, Text, View } from "react-native";

export default function ({ visible, onClose }: { visible: boolean, onClose: Function }) {
  return (
    <Pressable onPress={() => onClose()}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => onClose()}
      >
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.06)",
          backdropFilter: "blur(1px)"
        }}>
          <Pressable onPress={e => e.stopPropagation()}>
            <View style={{
              backgroundColor: "white",
              gap: 6,
              minHeight: 40,
              minWidth: 200,
              paddingHorizontal: 18,
              paddingVertical: 8,
              borderRadius: 8
            }}>
              <Text style={{ textAlign: "center", fontSize: 18, fontWeight: 500 }}>Judul Modal</Text>
              <Text style={{ marginVertical: 14 }}>Content modal bisa berisi apa saja</Text>
              <Button title="Tutup" onPress={() => onClose()} />
            </View>
          </Pressable>
        </View>
      </Modal>
    </Pressable>
  );
}