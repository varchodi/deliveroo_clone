import { StyleSheet, Text, View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';

export type Ref = BottomSheetModal;
//?? wrapped in forwardref to add ref to it in custom header
const BottomSheet =React.forwardRef<Ref>( (props,ref) => {
    const snapPoints = React.useMemo(() => ['50%'], []);
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
        <View>
            <Text>BottomSheetModal</Text>
        </View>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({})