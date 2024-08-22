import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "./../components/LoginScreen"
export default function RootLayout() {

  useFonts({
    'DMSerifText': require('./../assets/fonts/DMSerifText-Italic.ttf'),
    'Oswald': require('./../assets/fonts/Oswald-SemiBold.ttf')
  })
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>

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
