import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import RestaurantList from './src/components/RestaurantList';

import restaurants from './assets/data/restaurants.json'


export default function App() {
  return (
    <TailwindProvider>
      <View className="px-4 flex-1 justify-center items-center">
        <RestaurantList data={restaurants}/>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
