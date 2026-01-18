import { useRef, useState } from "react";
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Button, Card, FAB, Icon, List, TextInput, useTheme } from "react-native-paper";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";

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
  const isSwiping = useRef(false);

  function handleDelete(id: number | string) {
    if (Platform.OS === 'web') {
      if (window.confirm('Yakin untuk melanjutkan?')) {
        setTodos(prevTodos => prevTodos.filter(item => item.id != id));
      }
    } else {
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
  }

  function handleToggleDone(id: number | string) {
    setTodos(prevTodos => prevTodos.map(item => item.id == id ? { ...item, done: !item.done } : item));
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
      <Modal
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
                    <Button onPress={close}>Batal</Button>
                    <Button onPress={handleSubmit}>Simpan</Button>
                  </Card.Actions>
                </Card>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
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
              onSwipeableWillOpen={() => {
                isSwiping.current = true
                setTimeout(() => isSwiping.current = false, 70)
              }}
              onSwipeableClose={() => {
                isSwiping.current = true
                setTimeout(() => isSwiping.current = false, 70)
              }}
              friction={2}
              renderRightActions={(prog, drag) => {
                const animatedStyle = useAnimatedStyle(() => ({
                  transform: [{ translateX: drag.value + 60 }],
                  opacity: prog.value
                }));
                return (
                  <Reanimated.View style={[animatedStyle, { width: 60 }]}>
                    <RectButton
                      style={{ flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}
                      rippleColor="rgba(255, 255, 255, 0.3)"
                      onPress={() => handleDelete(item.id)}
                    >
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
                onPress={() => {
                  if (!isSwiping.current) {
                    handleToggleDone(item.id);
                  }
                }}
              />
            </Swipeable>
          )}
        />
      </View>
    </>
  );
}