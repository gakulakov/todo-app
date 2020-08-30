import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";
import { AppTextBold } from "./AppTextBold";

export const SelectNavBar = ({ title }) => {
  if (Platform.OS === "android") {
    return (
      <LinearGradient
        colors={THEME.NAV_GRADIENT}
        start={[1, 2]}
        style={styles.navbarAndroid}
      >
        <AppTextBold style={styles.text}>{title}</AppTextBold>
      </LinearGradient>
    );
  } else {
    return (
      <View style={styles.navbarIos}>
        <AppTextBold style={styles.text}>{title}</AppTextBold>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "#3949ab",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // Тень
    elevation: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  },

  navbarAndroid: {
    height: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // Тень
    elevation: 11,
  },
  navbarIos: {
    height: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "#3949ab",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 2,

    // Тень

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
