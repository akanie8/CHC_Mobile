import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function profile() {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontFamily: 'Oswald'}}>profile</Text>
    </SafeAreaView>
  )
}