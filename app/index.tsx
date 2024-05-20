import { Link } from 'expo-router'
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonShare from "../components/MaterialButtonShare";
import Icon from "react-native-vector-icons/Entypo";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <MaterialUnderlineTextbox
        inputStyle="Enter A Number ..."
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <MaterialButtonShare
        iconName="share-variant"
        icon="arrow-down"
        style={styles.materialButtonShare}
      ></MaterialButtonShare>
      <Text style={styles.loremIpsum}></Text>
      <Image
        source={require("../assets/images/Geez_Nums-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Icon name="dots-three-vertical" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 328,
    marginTop: 345,
    alignSelf: "center"
  },
  materialButtonShare: {
    height: 76,
    width: 73,
    marginTop: 56,
    marginLeft: 151
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(29,61,195,1)",
    height: 226,
    width: 375,
    textAlign: "center",
    fontSize: 60,
    marginTop: 22
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -667,
    marginLeft: 88
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -260,
    marginLeft: 288
  }
});
export default LoginPage