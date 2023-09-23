import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Link } from 'expo-router'

// search bar component
const SearchBar=()=> {
  return (
    <View style={styles.SearchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name='ios-search' size={20} color={Colors.medium}/>
                <TextInput style={styles.input} placeholder='Reastaurents, groceries,dishes'/>
            </View>
            <Link href={`/`} asChild>
                <TouchableOpacity style={styles.optionBtn}>
                    <Ionicons name='options-outline' size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
  )
}

const CustomHeader = () => {
  return (
      <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {/* ?? this view is a test */}
              <View style={{ flex: 1, flexDirection: 'row', gap:20}}>
                <TouchableOpacity>
                <Image style={styles.bike} source={require('../assets/images/bike.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleContainer} >
                    <Text style={styles.title}>Delivery · Now</Text>
                    <View style={styles.locationName}>
                        <Text style={styles.subtitle}>San francisco, CA</Text>
                        <Ionicons name='chevron-down' size={20} color={Colors.primary} />
                    </View>
                </TouchableOpacity>    
            </View>

            <TouchableOpacity style={styles.profileBtn}>
                <Ionicons name="person-outline" size={20} color={Colors.primary} />
            </TouchableOpacity>
      </View>
          {/* search bar */}
          <SearchBar/>
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      bike: {
        width: 30,
        height: 30,
      },
      titleContainer: {
        //flex: 1,
      },
      title: {
        fontSize: 14,
        color: Colors.medium,
    },
      locationName:{ flexDirection:'row',alignContent:"center",justifyContent:"center"},
    subtitle: {
        fontSize: 18,
        fontWeight:'bold',
    },
    profileBtn:{
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius:50,
    },

    //search bar and stuff  component
    SearchContainer: {
        height: 60,
        backgroundColor:"#fff"
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems:'center',
    },
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
    },
    input: {
        padding: 10,
        color:Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft:10,
    },
    optionBtn: {
        padding: 10,
        borderRadius:50,
    },
})