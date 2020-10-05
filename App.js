import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Google from 'expo-google-app-auth';
import LoginPage from './src/screens/LoginPage';
import { androidClientId } from './androidClientId';
import LoggedInPage from './src/screens/LoggedInPage'
import { StyleSheet, View } from 'react-native';


export default function App() {
  const [data, setData] = useState({
    signedIn: false,
    name: '',
    photoUrl: '',
  });


  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        scopes: ['profile', 'email'],
      });
      console.log(result)
      if (result.type === 'success') {
        setData({
          signedIn: true,
          name: result.user.name,
          email: result.user.email,
          photoUrl: result.user.photoUrl,
        });
      } else {
        console.log('cancelled');
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {data.signedIn ? (
        <LoggedInPage
          email={data.email}
          name={data.name}
          photoUrl={data.photoUrl}
        />
      ) : (
        <LoginPage signIn={signIn} />
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});