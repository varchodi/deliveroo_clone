import { StyleSheet, Text, View, TouchableOpacity, FlatList, ListRenderItem, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from 'expo-router'
// category data
import categories from '../../assets/data/filter.json'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
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
    const [items, setItems] = useState<Category[]>(categories);
    const [selected, setSelected] = useState<Category[]>([]);
    const flexWidth = useSharedValue(0);
    const scale = useSharedValue(0);

    useEffect(() => {
        const hasSelected = selected.length > 0;
        const selectedItems = items.filter((it) => it.checked);
        const newSelected = selectedItems.length > 0;
        
        if (hasSelected !== newSelected) {
            //?? with timing , to ass a same king of aspect 
            flexWidth.value = withTiming(newSelected ? 150 : 0);
            //?? hide and remove
            scale.value =withTiming( newSelected ? 1 : 0);
        };
        setSelected(selectedItems);
    },[items])
    //?? clear checked items
    const handleClearAll = () => {
        const updateditems = items.map((item) => {
            item.checked = false;
            return item;
        });
        setItems(updateditems);
    }

    //?? animated styles
    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: flexWidth.value,
            opacity: flexWidth.value > 0 ? 1 : 0,
        }
    });
    const animatedText = useAnimatedStyle(() => {
        return {
            transform:[{scale:scale.value}],
        }
    });
    //?? render Item custom function
    const renderItem: ListRenderItem<Category> = ({ item,index }) => {
        return (
            <View style={styles.row}>
                <Text
                    style={styles.itemText}
                >{item.name} ({item.count})</Text>
                <BouncyCheckbox
                    isChecked={items[index].checked}
                    fillColor={Colors.primary}
                    unfillColor="#fff"
                    disableBuiltInState
                    iconStyle={{ borderColor: Colors.primary, borderRadius: 4, }}
                    innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
                    onPress={() => {
                        const isChecked = items[index].checked;
                        const updateditems = items.map((item) => {
                            if (item.name == items[index].name) {
                                item.checked = !isChecked;
                            }
                            return item;
                        });
                        setItems(updateditems);
                    }}
                />
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
              <View style={styles.btnContainer}>
                  {/* ?? styles of animated view style={[animatedStyles,styles.outlineBtn]} */}
                <Animated.View style={[styles.outlineBtn]}> 
                    <TouchableOpacity style={{}} onPress={handleClearAll}>
                    {/* ?? this animated text be with styles style={[styles.outlineBtnText,animatedText]} */}
                    <Animated.Text style={[styles.outlineBtnText]}>Clear All</Animated.Text>
                    </TouchableOpacity>
                </Animated.View>

                <TouchableOpacity style={styles.fullBtn} onPress={navigation.goBack}>
                    <Text style={styles.footerText}>Done</Text>
                </TouchableOpacity>
                  
              </View>
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
        borderRadius: 8,
        flex: 1,
        
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
    itemText: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    btnContainer:{
        flexDirection: 'row',
        gap: 12,
        justifyContent:'center',
    },
    outlineBtn: {
        borderColor: Colors.primary,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal:4,
    },
    outlineBtnText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize:16,
    },
})