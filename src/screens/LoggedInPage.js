import React from 'react';
import { StyleSheet, Text, View, Button, Image } from "react-native";

const LoggedInPage = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <View style={styles.info}>
        <Text style={styles.txt}>{props.name}</Text>
        <Text style={styles.txt}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 120
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150,
    marginVertical: 40
  },
});

export default LoggedInPage;