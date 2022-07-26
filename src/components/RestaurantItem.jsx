import { TailwindProvider } from "tailwindcss-react-native";
import {View, Text, Image} from 'react-native';

export default function RestaurantItem(props) {
    return (
        <TailwindProvider>
            <View className="w-full drop-shadow-xl bg-gray-200 p-2 my-1 rounded-md">
                <Image className="aspect-[5/3] rounded-md" source={{uri: props.uri}}/>
                <Text className="text-lg font-bold text-gray-800 px-1">{props.title}</Text>
                <Text className="font-bold px-1 text-gray-600 text-xs">${props.deliveryFee} &#8226; {props.minDeliveryTime}-{props.maxDeliveryTime} mins</Text>
            </View>
        </TailwindProvider>
    );
}
