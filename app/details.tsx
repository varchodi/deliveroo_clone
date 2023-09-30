import { Image, StyleSheet, Text, View,TouchableOpacity,SectionList,ListRenderItem } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import {restaurant} from '@/assets/data/restaurant'
import { Link, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const DetailsPage = () => {
    const navigation = useNavigation();
    
    const DATA = restaurant.food.map((item, index) => ({
        title: item?.category,
        data: item.meals,
        index,
    }))
        
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTinColor: Colors.primary,
            headerLeft: () => <TouchableOpacity
                style={styles.roundButton}
                onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' color={Colors.primary}/>
            </TouchableOpacity>,
            headerRight: () => (
                <View style={styles.bar}>
                    <TouchableOpacity
                        style={styles.roundButton}
                        // onPress={() => navigation.goBack()}
                    >
                        <Ionicons name='share-outline' color={Colors.primary}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.roundButton}
                    // onPress={() => navigation.goBack()}
                    >
                        <Ionicons name='search-outline' color={Colors.primary}/>
                    </TouchableOpacity>
                </View>
            )
        })
        console.log("Details")
    }, [])
    
    const renderItem: ListRenderItem<any> = ({ item, index }) => (
        <Link href={{ pathname: '/', params: { id: item.id } }} asChild>
          <TouchableOpacity style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.dish}>{item.name}</Text>
              <Text style={styles.dishText}>{item.info}</Text>
              <Text style={styles.dishText}>${item.price}</Text>
            </View>
            <Image source={item.img} style={styles.dishImage} />
          </TouchableOpacity>
        </Link>
      );
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
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantDescription}>
            {restaurant.delivery} · {restaurant.tags.map((tag, index) => `${tag}${index < restaurant.tags.length - 1 ? ' · ' : ''}`)}
                  </Text>
                  <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
                
                  {/* section list  */}
                  <SectionList
                      contentContainerStyle={{paddingBottom:50}}
                      keyExtractor={(item,index)=>`${item.name}+${index}`}
                      scrollEnabled={false} sections={DATA}
                    //   items
                      renderItem={renderItem}
                      //   items separator
                      ItemSeparatorComponent={() => (
                          <View style={{height:1,backgroundColor:Colors.grey}}></View>
                      )}
                      //section separetir
                      SectionSeparatorComponent={() => (
                        <View style={{height:1,backgroundColor:Colors.grey}}></View>
                    )}
                      //   section header
                      renderSectionHeader={({ section: { title, index } }) => (
                          <Text style={styles.sectionHeader
                          }>{title}</Text>
                      )}
                  />
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
      backgroundColor: '#fff',
      marginLeft: 70,
      height: 100,
      justifyContent: 'flex-end',
    },
    roundButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    stickySectionText: {
      fontSize: 20,
      margin: 10,
    },
    restaurantName: {
      fontSize: 30,
      margin: 16,
    },
    restaurantDescription: {
      fontSize: 16,
      margin: 16,
      lineHeight: 22,
      color: Colors.medium,
    },
    sectionHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 40,
      margin: 16,
    },
    item: {
      backgroundColor: '#fff',
      padding: 16,
      flexDirection: 'row',
    },
    dishImage: {
      height: 80,
      width: 80,
      borderRadius: 4,
    },
    dish: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    dishText: {
      fontSize: 14,
      color: Colors.mediumDark,
      paddingVertical: 4,
    },
    stickySegments: {
      position: 'absolute',
      height: 50,
      left: 0,
      right: 0,
      top: 100,
      backgroundColor: '#fff',
      overflow: 'hidden',
      paddingBottom: 4,
    },
    segmentsShadow: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
      width: '100%',
      height: '100%',
    },
    segmentButton: {
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 50,
    },
    segmentText: {
      color: Colors.primary,
      fontSize: 16,
    },
    segmentButtonActive: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 4,
      borderRadius: 50,
    },
    segmentTextActive: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    segmentScrollview: {
      paddingHorizontal: 16,
      alignItems: 'center',
      gap: 20,
      paddingBottom: 4,
    },
    footer: {
      position: 'absolute',
      backgroundColor: '#fff',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 10,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      paddingTop: 20,
    },
    fullButton: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      height: 50,
    },
    footerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    basket: {
      color: '#fff',
      backgroundColor: '#19AA86',
      fontWeight: 'bold',
      padding: 8,
      borderRadius: 2,
    },
    basketTotal: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });