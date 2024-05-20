import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#F1EEDC',
      },
      headerTintColor: '#000',
      headerTitleAlign:'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" options={{title:'Login', headerShown:false}}/>
    </Stack>
  );
}
