import { FlatList } from "react-native";
// import { TailwindProvider } from "tailwindcss-react-native";
import RestaurantItem from './RestaurantItem';


export default function RestaurantList({data}) {
    
    function renderRestaurant(restaurant){
        return (
            <RestaurantItem uri={restaurant.image} title={restaurant.name} 
            deliveryFee={restaurant.deliveryFee} minDeliveryTime={restaurant.minDeliveryTime} 
            maxDeliveryTime={restaurant.maxDeliveryTime} rating={restaurant.rating}/>
        );
    }

    return (
        <FlatList data={data} renderItem={renderRestaurant} />
    );
}