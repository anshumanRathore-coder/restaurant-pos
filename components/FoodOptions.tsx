import { Image, TouchableOpacity, View } from "react-native";
import { foodOptions } from "@/constants";
import onboarding3 from "@/assets/images/onboarding3.png";
import burger from "@/assets/foodOptions/burger.png";
import { Link } from "expo-router";
const FoodOptions = () => {
  return (
    <View className="flex flex-row flex-wrap  gap-y-5 ml-5">
      {foodOptions.map((food, index) => (
        <Link
          key={index}
          href={{
            pathname: "/(modal)/aboutFood",
            params: {
              id: food.id,
              name: food.name,
              description: food.description,
              img: food.image,
            },
          }}
          asChild
        >
          <TouchableOpacity className="w-[100px] h-[100px] bg-white mr-[10px] shadow-sm rounded-[4px] shadow-black">
            <Image source={food.image} className="object-cover w-full h-full" />
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
};

export default FoodOptions;
