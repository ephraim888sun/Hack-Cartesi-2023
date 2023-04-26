import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native'
import { React, useState, useEffect } from 'react'
// import { sha256, sha256Bytes } from 'react-native-sha256'
import { gql, useQuery } from '@apollo/client'
import { AppLoading } from 'expo'
import Web3 from 'web3'

const cartesiQuery = gql`
  query notices {
    notices {
      nodes {
        id
        index
        proof {
          outputHashesRootHash
          vouchersEpochRootHash
          noticesEpochRootHash
          machineStateHash
          keccakInHashesSiblings
          outputHashesInEpochSiblings
        }
        payload
        input {
          index
          epoch {
            index
          }
        }
      }
    }
  }
`

const DetailsScreen = () => {
  const { data, loading } = useQuery(cartesiQuery)

  console.log(data)

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <ScrollView>
            {data['notices']['nodes']?.map((item) => {
              console.log('item', item)
              const payloadString = Web3.utils.hexToAscii(item.payload)

              console.log('string', payloadString)

              const payload = JSON.parse(payloadString)

              console.log('payload', payloadString)
              return (
                <View style={styles.listItem} key={item.id}>
                  <Text style={styles.listItemText}>
                    UserId: {payload['userid']}
                  </Text>
                  <Text style={styles.listItemText}>
                    Date: {payload['date']}
                  </Text>
                  <Text style={styles.listItemText}>
                    Hash: {payload['imageId']}
                  </Text>

                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                  />
                </View>
              )
            })}
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  listItemText: {
    fontSize: 18,
  },
})
