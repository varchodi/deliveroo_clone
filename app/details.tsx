import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import {restaurant} from '@/assets/data/restaurant'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const DetailsPage = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTinColor: Colors.primary,
            headerLeft: () => <TouchableOpacity
                style={styles.roundBtn}
                onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' color={Colors.primary}/>
            </TouchableOpacity>,
            headerRight: () => (
                <View style={styles.bar}>
                    <TouchableOpacity
                        style={styles.roundBtn}
                        // onPress={() => navigation.goBack()}
                    >
                        <Ionicons name='share-outline' color={Colors.primary}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.roundBtn}
                    // onPress={() => navigation.goBack()}
                    >
                        <Ionicons name='search-outline' color={Colors.primary}/>
                    </TouchableOpacity>
                </View>
            )
        })
        console.log("Details")
    },[])
  return (
    <>
          <ParallaxScrollView
              style={{ flex:1}}
              backgroundColor={'#fff'}
              parallaxHeaderHeight={250}
              styles={{ height: 500 }}
              renderBackground={() => <Image source={restaurant.img} style={{width:'100%',height:300}} />}
              contentBackgroundColor={Colors.lightGrey}
            //   sticky header
              stickyHeaderHeight={100}
              renderStickyHeader={() => (
                  <View key='sticky-header' style={styles.stickySection}>
                      <Text style={styles.stickySectionText}>{restaurant.name} </Text>
                  </View>
              )}
          >
              <View style={styles.detailsContainer}>
                  <Text>Details</Text>
              </View>
          </ParallaxScrollView>
          
    </>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
        
    },
    stickySection: {
        //backgroundColor: Col,
        marginLeft: 70,
        height: 100,
        justifyContent:'flex-end'
    },
    stickySectionText:{
        fontSize: 20,
        margin:20
    },
    roundBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:10
    }
})