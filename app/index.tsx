import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Categories from '@/components/Categories';
import Restaurents from '@/components/Restaurents';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
      <SafeAreaView style={styles.conatiner}
      >
          <ScrollView
              contentContainerStyle={{
                  paddingBottom:40,
              }}
          >
              <Categories />
              <Text style={styles.header}>Top picks in your neighborhood</Text>
          <Restaurents/>
          <Text style={styles.header}>Offers near you</Text>
          <Restaurents/>
          </ScrollView>
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({
    conatiner: {
        top: 80,
        backgroundColor:Colors.lightGrey,
        //flex:1,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:12,
        marginBottom: 6,
        paddingHorizontal:16,
    },
})