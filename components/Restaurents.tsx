import { StyleSheet, Text, View,ScrollView,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { restaurants } from '@/assets/data/home'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'

const Restaurents = () => {
  return (
    <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
                padding:15,
            }}
      >
          {
              restaurants.map((restaurant, index) => (
                  <Link href={'/'} key={index} asChild>  
                      <TouchableOpacity>      
                        <View style={styles.categoryCard} >
                              <Image source={restaurant.img} style={styles.image} />
                              <View style={styles.categoryBox}>
                                  <Text style={styles.categoryText}>{restaurant.name}</Text>
                                  <Text style={{ color: Colors.green }}>{restaurant.rating} {restaurant.ratings}</Text>
                                  <Text style={{color:Colors.medium}}>{restaurant.distance} {restaurant.ratings}</Text>
                              </View>
                        </View>
                      </TouchableOpacity>
                  </Link>
              ))
      }
    </ScrollView>
  )
}

export default Restaurents

const styles = StyleSheet.create({
    categoryCard: {
        width: 300,
        height: 250,
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
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: 'bold',
        //textAlign:'center'
    },
    imageContainer: {
        
    },
    image: { flex: 5, width: undefined, height: undefined },
    categoryBox: {
        flex: 2,
        padding:10,
    },
})