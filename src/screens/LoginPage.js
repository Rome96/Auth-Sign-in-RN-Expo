import React from 'react'
import { AntDesign } from "@expo/vector-icons"; 
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LoginPage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In With Google</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.signIn()}>
        <AntDesign name="googleplus" size={24} color="blue" />
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    marginBottom: 40,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    elevation: 1
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default LoginPage;