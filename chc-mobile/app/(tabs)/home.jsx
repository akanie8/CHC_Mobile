import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontFamily: 'Oswald'}}>home</Text>
    </SafeAreaView>
  )
}

export default home