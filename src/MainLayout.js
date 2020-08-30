import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "./components/Navbar";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <LinearGradient
      colors={THEME.MAIN_GRADIENT}
      start={[0, 0.2]}
      style={styles.graditen}
    >
      <View>
        <Navbar title={"Todo App!"} />
        <View style={styles.container}>
          { todoId ? <TodoScreen /> : <MainScreen /> }
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    margin: 10,
  },
  graditen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
