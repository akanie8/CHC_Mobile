import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'DMSerifText': require('./../assets/fonts/DMSerifText-Italic.ttf'),
    'Oswald': require('./../assets/fonts/Oswald-SemiBold.ttf')
  })
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
