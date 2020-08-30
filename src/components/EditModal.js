import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка!",
        `Минимальная длина названия 3 символа. Сейчас ${
          title.trim().length
        } символов.`
      );
    } else {
      onSave(title);
    }
  };

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      animationType={"slide"}
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder={"Отредактируйте дело..."}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 250,
    marginHorizontal: 50,
    borderRadius: 25,
    elevation: 10,
  },
  input: {
    padding: 10,
    borderBottomColor: "#fed6e3",
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
