import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext()

  return (
    <SafeAreaView className="bg-white h-full">
      <Button onPress={seed} title="Seed" />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        ListHeaderComponent={
          <View className="px-5">
            {/* Header */}
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">

                <Image source={{ uri: user?.avatar }} className="w-12 h-12 rounded-full" />

                <View className="flex flex-col ml-2">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>

                  <Text className="font-rubik-medium text-base text-black-300">
                    {user?.name}
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
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
              />

              <View className="flex flex-row items-center justify-between mt-5">
                <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        }

      />


    </SafeAreaView>
  );
}
