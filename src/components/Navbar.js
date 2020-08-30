import React from "react";
import { View, StyleSheet, Platform } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";
// import { SelectNavBar } from './ui/SelectNavBar';

export const Navbar = ({ title }) => {
  return (
    <View style={{...styles.navbar, ...Platform.select({
      ios: styles.navbarIos,
      android: styles.navbarAndroid
    })}}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // Тень
    // elevation: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
  },

  navbarAndroid: {
    borderBottomWidth: 2,
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    elevation: 5
  },
  navbarIos: {
    backgroundColor: THEME.MAIN_COLOR,
  },

  text: {
    color: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    fontSize: 20,
  },
});
