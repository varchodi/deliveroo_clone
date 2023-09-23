import CustomHeader from '../components/CustomHeader';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

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
              presentation:'modal'
            }}
            name='(modal)/filter' />
        </Stack>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
}
