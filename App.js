import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CameraScreen from './screens/CameraScreen'
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { graphql_url } from './credentials'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: graphql_url,
  cache: new InMemoryCache(),
})

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            // options={{
            //   headerTitle: (props) => (
            //     <Ionicons name='camera' size={32} color='black' />
            //   ),
            //   headerRight: () => (
            //     <Button
            //       onPress={() => alert('This is a button!')}
            //       title='Update'
            //       color='#fff'
            //     />
            //   ),
            // }}
          />
          <Stack.Screen name='Details' component={DetailsScreen} />
          <Stack.Screen name='Camera' component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

// AppRegistry.registerComponent('MyApplication', () => App)

export default App

const styles = StyleSheet.create({})
