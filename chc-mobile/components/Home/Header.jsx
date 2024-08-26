import { View, Text , Image, TextInput} from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function Header() {

    const {user} = useUser();
  return (
    <View
    
        style={{
            padding: 20,
            paddingTop: 40,
            backgroundColor: "skyblue",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            
            
        }}
    >
        <View style={{

            display:'flex',
            flexDirection: 'row',
            alignItems: 'centre',
            gap: 10,
        }}>
            <Image source={{uri:user?.imageUrl}}
                style={{
                    width: 45,
                    height: 45,
                    borderRadius: 99,

                }}
            />
            <View
                style={{
                    marginTop: 5
                }}
            >
                <Text style={{
                    opacity: 1,
                    color: 'navy',
                    fontFamily: 'DMSerifText',
            
                }}>Welcome</Text>
                <Text
                    style={{
                        fontFamily: 'Oswald',
                        fontSize: 15,
                        shadowOpacity: 0.3,
                    
                    }}
                >{user?.fullName}</Text>
            </View>
        </View>
        {/* Seearch bar section */}
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 5,
            marginTop: 15,
            borderRadius: 20,
            shadowOffset: 0.5,
            shadowOpacity: 0.4
        }}>
        <EvilIcons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='Search something....'></TextInput>
        </View>
    </View>
  )
}