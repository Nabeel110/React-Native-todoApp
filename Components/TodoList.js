import React from "react";
import { View } from "react-native";
import { Icon, Text, List, ListItem, CheckBox } from "native-base";

const TodoList = ({ todoList, setTodoList }) => {
  const deleteTodo = (id) => {
    const updateList = todoList.filter((item) => id !== item.id);
    return setTodoList(updateList);
  };

  const updateStatus = (id) => {
    const updateList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });

    setTodoList(updateList);
  };
  return (
    <View>
      {todoList.length > 0 ? (
        <List>
          {todoList.map((item) => (
            <ListItem key={item.id} style={{ justifyContent: "space-between" }}>
              <CheckBox
                checked={item.status}
                color="green"
                onPress={() => updateStatus(item.id)}
              />
              <Text
                style={
                  item.status
                    ? { textDecorationLine: "line-through" }
                    : { textDecorationLine: "none" }
                }
              >
                {item.title}
              </Text>
              <Icon
                name="trash"
                style={{ color: "red" }}
                onPress={() => deleteTodo(item.id)}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          No todos Added!
        </Text>
      )}
    </View>
  );

  //   );
};

export default TodoList;
