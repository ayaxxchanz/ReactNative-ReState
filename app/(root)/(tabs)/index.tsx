import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";
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
      </View>

    </SafeAreaView>
  );
}
