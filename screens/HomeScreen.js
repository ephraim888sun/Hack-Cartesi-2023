import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1500785770663067648/a8Yzl1M6_400x400.jpg',
          }}
        />
        <Image
          style={{ width: 100, height: 100, marginLeft: 10 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <Button title='Details' onPress={() => navigation.navigate('Details')} />
      <Button title='Camera' onPress={() => navigation.navigate('Camera')} />

      {/* <Button title='Test Function' onPress={() => send_input(3423423)} /> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
