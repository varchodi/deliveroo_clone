import CustomHeader from '../components/CustomHeader';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme,View,TouchableOpacity,Text } from 'react-native';
import Colors from '../constants/Colors';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};


export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* ?? to call these bottomsheets in any page or components */}
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{
            header:()=><CustomHeader/>
          }} />
          {/* add filter page to stack */}
          <Stack.Screen
            options={{
              presentation: "modal",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.lightGrey,
              },
              headerTitleAlign:'center',
              //?? 
              headerLeft: () => (
                <TouchableOpacity onPress={navigation.goBack}>
                  <Ionicons name='close-outline' size={28} color={Colors.medium} />
                </TouchableOpacity>
              ),
              
            }}
            name='(modal)/filter' />
        </Stack>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
}
