import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        {/* Header */}
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">

            <Image source={images.avatar} className="w-12 h-12 rounded-full" />

            <View className="flex flex-col ml-2">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>

              <Text className="font-rubik-medium text-base text-black-300">
                Aliya H.
              </Text>
            </View>
          </View>

          <Image source={icons.bell} className="w-5 h-5" />
        </View>


        <Search />

        {/* Featured */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>

          {/* Featured Card */}
          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard />
            <FeaturedCard />
          </View>

          <View className="flex flex-row items-center justify-between mt-5">
            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>
          
          <Filters />

          {/* Card */}
          <View className="flex flex-row gap-5 mt-5">
            <Card />
            <Card />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}
