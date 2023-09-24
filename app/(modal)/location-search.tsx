import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocationSearch
 = () => {
  return (
    <View>
      <Text>LocationSearch {process.env?.EXPO_PUBLIC_GOOGLE_API_KEY ?? "none"}
      </Text>
    </View>
  )
}

export default LocationSearch


const styles = StyleSheet.create({})