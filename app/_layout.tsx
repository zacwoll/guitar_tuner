import { Stack } from "expo-router";
// import { StatusBar } from 'expo-status-bar';
import { View, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} /> 
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
