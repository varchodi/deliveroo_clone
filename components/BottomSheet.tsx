import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import {Link} from 'expo-router'
import { BottomSheetModal,BottomSheetBackdrop,useBottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;
//?? wrapped in forwardref to add ref to it in custom header
const BottomSheet =React.forwardRef<Ref>( (props,ref) => {
    const snapPoints = React.useMemo(() => ['50%'], []);
    //?? backdrop component (to set the backdrop , like backdrops in css or samething else)?? 
    const renderBackdrop = React.useCallback((props: any) => (
        <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props} />), []
    );
    // dismiss use to close the bottomsheet;
    const { dismiss }=useBottomSheetModal();
  return (
      <BottomSheetModal
        handleIndicatorStyle={{display:'none'}}
        backgroundStyle={{backgroundColor:Colors.lightGrey,borderRadius:0}}
        overDragResistanceFactor={0}
        backdropComponent={renderBackdrop}
        ref={ref} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
            {/* top toggle btns */}
            <View style={styles.toggle}>
                  <TouchableOpacity style={styles.toggleActive}>
                      <Text style={styles.activeText}>delivery</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.toggleInactive}>
                      <Text style={styles.inactiveText}>PickUp</Text>
                  </TouchableOpacity>
            </View>
            <Text style={styles.subHeader}>Your location</Text>
            {/* link to location (not yet setted up) */}
              <Link href={'/(modal)/location-search'} asChild>
                  <TouchableOpacity onPress={()=>dismiss()}>
                      <View style={styles.item}>
                          <Ionicons name='locate-outline' size={20} color={Colors.medium}/>
                          <Text style={{ flex: 1}}>Current Location</Text>
                          <Ionicons name='chevron-forward-outline' size={20} color={Colors.medium}/>
                      </View>
                  </TouchableOpacity>
              </Link>
              
              <Text style={styles.subHeader}>Arrival Time</Text>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Ionicons name='stopwatch-outline' size={20} color={Colors.medium}/>
                        <Text style={{ flex: 1}}>Now</Text>
                        <Ionicons name='chevron-forward-outline' size={20} color={Colors.medium}/>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>dismiss()}>
                <Text style={styles.buttomText}>Confirm</Text>
            </TouchableOpacity>
            {/* <Button title='Dismiss' onPress={()=>dismiss()}/> */}
        </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom:32,
    },
    toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal:32,
    },
    activeText: {
        color: "#fff",
        fontWeight:"700",
    },
    toggleInactive: {
        padding: 8,
        borderRadius: 32,
        paddingHorizontal:32,
    },
    inactiveText: {
        color: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        marginHorizontal:10,
    },
    buttomText: {
        color: "#fff",
        fontWeight:'bold',
    },
    subHeader:{
        fontSize: 16,
        fontWeight: "600",
        margin:16,
    },
    item: {
        flexDirection: 'row',
        gap: 8,
        padding:18,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: Colors.grey,
        borderWidth: 1,
        marginBottom:10,
    }
})