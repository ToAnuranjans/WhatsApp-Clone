import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-cyan-50 text-3xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
