import { Link } from 'expo-router'
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonShare from "../components/MaterialButtonShare";
import Icon from "react-native-vector-icons/Entypo";
import { useState } from 'react';

const LoginPage = () => {
  const Geezify = require("geezify-js") // For Node only
  let geez = Geezify.create();
  const [inputNumber, setInputNumber] = useState('');
  const [resultNumber, setResultNumber] = useState('');
  return (
    <View style={styles.container}>
      <MaterialUnderlineTextbox
        textValue={inputNumber}
        setTextValue={setInputNumber}
        inputStyle="Enter A Number ..."
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <MaterialButtonShare
        iconName="share-variant"
        icon="arrow-down"
        style={styles.materialButtonShare}
        press={() => {
          if (inputNumber === '' || inputNumber.startsWith('0')) {
            setResultNumber('0');
            styles.loremIpsum = {
              color: "rgba(29,61,195,1)",
              height: 226,
              width: 375,
              textAlign: "center",
              fontSize: 60,
              marginTop: 22
            }
        } else if (/[^0-9]/.test(inputNumber)) {
          styles.loremIpsum ={
            color: "red",
            height: 226,
            width: 375,
            textAlign: "center",
            fontSize: 25,
            marginTop: 22
          }
          setResultNumber("Error: Can't Convert String To Number!");
        } else {
          setResultNumber(geez.toGeez(inputNumber));
          styles.loremIpsum = {
            color: "rgba(29,61,195,1)",
            height: 226,
            width: 375,
            textAlign: "center",
            fontSize: 60,
            marginTop: 22
          }
        }
        }}
      ></MaterialButtonShare>
      <Text style={styles.loremIpsum} >{resultNumber}</Text>
      <Image
        source={require("@/assets/images/Geez_Nums-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Icon onPress={() => { setResultNumber('') }} name="cross" style={styles.icon}></Icon>
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
    color: "rgba(25,87,194,1)",
    fontSize: 40,
    marginTop: 200,
    marginLeft: 320
  }
});

export default LoginPage