import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "./../components/LoginScreen";
import * as SecureStore from "expo-secure-store";
export default function RootLayout() {

  const tokenCache = {
    async getToken(key){
      try {
        return SecureStore.getItemAsync(key);
      } catch(err){
        return null;
      }
    },
    async saveToken(key, value){
      try{
        return SecureStore.setItemAsync(key, value);
      } catch(err){
        return
      }
    }
  }

  useFonts({
    'DMSerifText': require('./../assets/fonts/DMSerifText-Italic.ttf'),
    'Oswald': require('./../assets/fonts/Oswald-SemiBold.ttf'),
    'SpaceMono': require('./../assets/fonts/SpaceMono-Regular.ttf')
  })
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>

    <SignedIn>
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen />
    </SignedOut>

    </ClerkProvider>
  );
}
