import { Alert, FlatList, KeyboardAvoidingView, Modal as RNModal, Platform, TouchableWithoutFeedback, View } from "react-native";
import { Button, Card, FAB, Icon, List, TextInput } from "react-native-paper";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Makan",
    description: "Makan ayam goreng ismail bin mail di depan rumah tok dalang",
    icon: "food",
    done: null
  },
  {
    id: 2,
    title: "Memancing",
    description: "Memancing perkoro bersama Mister Ambatukam di sungai Amazon",
    icon: "hook",
    done: null
  },
  {
    id: 3,
    title: "Checkout",
    description: "Checkout mainan Driver Kamen Rider Build dan botol Rabbit Tank Sparkling",
    icon: "cart-heart",
    done: true
  }
];

export default function Index() {
  const [todos, setTodos] = useState(data);
  const [addFormVisible, setAddFormVisible] = useState(false);

  function handleDelete(id: number | string) {
    Alert.alert(
      "Hapus",
      "Yakin untuk melanjutkan?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Ya",
          style: "destructive",
          onPress: () => {
            setTodos(prevTodos => prevTodos.filter(item => item.id != id));
          }
        }
      ]
    );
  }

  function handleToggleDone(id: number | string) {
    setTodos(prevTodos => prevTodos.map(item => item.id == id ? {...item, done: !item.done} : item));
  }

  function TodoAddForm({ visible, close }: { visible: boolean, close: () => void }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit() {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: (prevTodos.at(-1)?.id || Math.floor(Math.random() * 100)) + 1,
          title: title.trim(),
          description: description.trim(),
          icon: "",
          done: null
        }
      ]);

      setTitle("");
      setDescription("");
      close();
    }

    return (
      <RNModal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={close}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={close}>
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              padding: 20
            }}>
              <TouchableWithoutFeedback>
                <Card>
                  <Card.Title title="Tambah Todo" />
                  <Card.Content style={{ gap: 6 }}>
                    <TextInput label="Judul" value={title} onChangeText={setTitle} />
                    <TextInput label="Deskripsi" value={description} onChangeText={setDescription} multiline numberOfLines={3} />
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={handleSubmit}>Simpan</Button>
                    <Button onPress={close}>Batal</Button>
                  </Card.Actions>
                </Card>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </RNModal>
    );
  }

  return (
    <>
      <FAB icon={"text-box-plus-outline"} style={{
        position: "absolute",
        zIndex: 100,
        bottom: "12%",
        right: "8%",
        borderRadius: "50%"
      }} onPress={() => setAddFormVisible(true)} />
      <TodoAddForm visible={addFormVisible} close={() => setAddFormVisible(false)} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={todos}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <Swipeable
              friction={2}
              renderRightActions={(prog, drag) => {
                const animatedStyle = useAnimatedStyle(() => ({
                  transform: [{ translateX: drag.value + 60 }],
                  opacity: prog.value
                }));
                return (
                  <Reanimated.View style={[animatedStyle, { width: 60 }]}>
                    <RectButton onPress={() => handleDelete(item.id)} style={{ flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }} rippleColor="rgba(255, 255, 255, 0.3)">
                      <View accessible accessibilityRole="button">
                        <Icon color="white" source="trash-can" size={30} />
                      </View>
                    </RectButton>
                  </Reanimated.View>
                );
              }}
            >
              <List.Item
                title={item.title}
                description={item.description}
                left={props => <List.Icon {...props} icon={item.icon || "list-box-outline"} style={{ backgroundColor: "none" }} />}
                style={{ padding: 6 }}
                titleStyle={{
                  textDecorationLine: item.done === true ? 'line-through' : 'none',
                  color: item.done === true ? '#999' : '#000'
                }}
                descriptionStyle={{
                  textDecorationLine: item.done === true ? 'line-through' : 'none',
                  color: item.done === true ? '#aaa' : '#666'
                }}
                onPress={() => handleToggleDone(item.id)}
              />
            </Swipeable>
          )}
        />
      </View>
    </>
  );
}