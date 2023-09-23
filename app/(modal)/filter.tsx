import { StyleSheet, Text, View, TouchableOpacity, FlatList, ListRenderItem } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from 'expo-router'
// category data
import categories from '../../assets/data/filter.json'
interface Category{
    name: string,
    count: number,
    checked?:boolean
}

const ItemBox = () => {
    return (
        <>
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.item}>
                    <Ionicons name='arrow-down-outline' size={20} color={Colors.medium}/>
                    <Text style={{ flex: 1}}>Sort</Text>
                    <Ionicons name='chevron-forward-outline' size={22} color={Colors.primary}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Ionicons name='fast-food-outline' size={20} color={Colors.medium}/>
                    <Text style={{ flex: 1}}>Hygiene rating</Text>
                    <Ionicons name='chevron-forward-outline' size={22} color={Colors.primary}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Ionicons name='pricetag-outline' size={20} color={Colors.medium}/>
                    <Text style={{ flex: 1}}>Offers</Text>
                    <Ionicons name='chevron-forward-outline' size={22} color={Colors.primary}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Ionicons name='nutrition-outline' size={20} color={Colors.medium}/>
                    <Text style={{ flex: 1}}>diatery</Text>
                    <Ionicons name='chevron-forward-outline' size={22} color={Colors.primary}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>categories</Text>
            </>
    )
};

const Filter = () => {
    const navigation = useNavigation();
    //?? render Item custom function
    const renderItem: ListRenderItem<Category> = ({ item }) => {
        return (
            <View style={styles.row}>
                <Text>{item.name}</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
          <FlatList
              data={categories}
              renderItem={renderItem}
              ListHeaderComponent={<ItemBox/>}
          />
          <View style={{ height:76}}></View>
        <View style={styles.footer}>
              <TouchableOpacity style={styles.fullBtn} onPress={navigation.goBack}>
                  <Text style={styles.footerText}>Done</Text>
              </TouchableOpacity>
        </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor:Colors.lightGrey,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 10,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset:{
            width: 0,
            height:-10,
        }
    },
    fullBtn: {
        backgroundColor: Colors.primary,
        padding: 24,
        alignItems: 'center',
        borderRadius:8,
    },
    footerText:{
        color: "#fff",
        fontWeight: 'bold',
        fontSize:16,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        marginBottom:16,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:16,
    },
    item: {
        flexDirection: 'row',
        gap: 20,
        paddingVertical:10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: Colors.grey,
        borderBottomWidth:1,
    },
    row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 10,
    }
})