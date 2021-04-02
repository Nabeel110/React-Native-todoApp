import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label,
  Spinner,
} from "native-base";
import TodoList from "./Components/TodoList";

const initialData = [
  {
    id: 1,
    title: "First Item",
    status: false,
  },
  {
    id: 2,
    title: "Second Item",
    status: false,
  },
  {
    id: 3,
    title: "Third Item",
    status: false,
  },
];

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoList, setTodoList] = useState(initialData);
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(4);

  const addTodo = (text) => {
    // console.log(text);
    if (text === "") {
      alert("Cannot Add empty Todo");
      return;
    }
    const newItem = {
      id: counter,
      title: text,
      status: false,
    };
    setTodoList([...todoList, newItem]);
    setCounter(counter + 1);
  };
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    })();
  }, []);

  if (!isReady) {
    return <Spinner color="blue" />;
  }
  return (
    <Container>
      <Header>
        <Body style={{ alignItems: "center" }}>
          <Title>Todo App</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel style={{ paddingBottom: 5 }}>
            <Label>Add Todo</Label>
            <Input onChangeText={setText} value={text} />
          </Item>
        </Form>
        <Button success full style={styles.btn} onPress={() => addTodo(text)}>
          <Text>Add Todo</Text>
        </Button>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Content>
      <Footer>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            position: "absolute",
            top: 12,
            bottom: 7,
          }}
        >
          © Nabeel Ahmed 2021
        </Text>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
  },
  btn: {
    display: "flex",
    flex: 1,
    // width: "50%",
    borderRadius: 10,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,

    // borderStyle: "solid",
    backgroundColor: "#480E4D",
  },
});
