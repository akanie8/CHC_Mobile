import { Colors } from '@/constants/Colors';
import React from 'react';
import * as WebBrowser from "expo-web-browser"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useWarmUpBrowser} from "../hooks/useWarmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const {startOAuthFlow} = useOAuth({ strategy: "oauth_google"});

  const onPress = React.useCallback(async () => {

    try{
      const { createdSessionId, signIn, signUp, setActive} = 
      await startOAuthFlow();

      if(createdSessionId){
        setActive({session: createdSessionId});
      } else{
        //use signIn or signUp for next steps 
      } 
    }catch(err){
      console.error("OnAuth error", err);
    }


  }, []);
  return (
    <View style={{ flex: 1 }}>
      
      {/* Image Section */}
      <View 
        style={{ 
          flex: 2, 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <Image 
          source={require('./../assets/images/Logo.png')}
          style={{
            width: 200,
            height: 200,
            marginTop: 150,
            
          }}
        />
      </View>

      {/* Welcome Text Section */}
      <View style={textStyle.subTextContainer}>
        <Text style={{
          fontSize: 20,
          fontFamily: 'Oswald',
          textAlign: 'center',
          shadowOpacity: 0.3,
          
        }}>
          Welcome To <Text style={{ color: Colors.PRIMARY }}>Christian House</Text><Text> Church</Text>
        </Text>

        <TouchableOpacity style={textStyle.btn} onPress={onPress}>
          <Text style={{
            color: '#ffff',
            fontFamily: 'Oswald',
            fontSize: 15
            
          }}>Join Our Christian Journey</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const textStyle = StyleSheet.create({
  subTextContainer: {
    flex: 1,
    backgroundColor: '#ffffff', 
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center',  
    marginBottom: 50,
  },
  btn: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 99, 
    margin: 10,
    marginTop: 30,
  },
});


