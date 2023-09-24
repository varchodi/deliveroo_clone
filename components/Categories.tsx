import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import { categories } from '@/assets/data/home'

const Categories = () => {
  return (
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
                padding:15,
            }}
      >
          {
              categories.map((category, index) => (
                  <View style={styles.categoryCard} key={index+category.text}>
                      <Image source={category.img} />
                      <Text style={styles.categoryText}>{category.text}</Text>
                  </View>
              ))
      }
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    categoryCard: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        marginEnd: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height:5,
        },
        shadowOpacity: 0.06,
        borderRadius:4,
    },
    categoryText: {
        padding: 6,
        fontSize: 14,
        fontWeight: 'bold',
        //textAlign:'center'
    }
})