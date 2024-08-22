import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Image, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={require('./../assets/images/Logo.png')}
          style={{
            width: 200,
            height: 200,
            marginBottom: 200
          }}
        />
      </View>

      <View style={{backgroundColor: '#ffff', padding: 20}}>
        <Text>
           Welcome To <Text style={{
            color: Colors.PRIMARY
           }}>Christian House Church</Text>
        </Text>
      </View>
    </View>
  );
}






