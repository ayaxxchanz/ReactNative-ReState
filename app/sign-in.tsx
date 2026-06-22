import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {
  const{ isLoggedIn, loading, refetch } = useGlobalContext()

  // If already logged in, redirect to main page
  if(!loading && isLoggedIn) return <Redirect href="/" />

  const handleLogin = async () => {
    const result =  await login()
    if(result){
      refetch()
    }
    else{
      Alert.alert('Error', 'Failed to Login')
    }

  }

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* contentContainerClassName allows NativeWind to handle scroll content sizes */}
      <ScrollView contentContainerClassName="flex-grow">
        
        <View className="w-full h-4/6 overflow-hidden">
          <Image 
            source={images.onboarding} 
            className="w-full h-full" 
            resizeMode="contain" 
          />
        </View>

        {/* Content Section */}
        <View className="px-10 justify-center">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>

          <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>

          <TouchableOpacity 
            onPress={handleLogin} 
            className="mt-5"
          >
            {/* By putting flex-row inside this standard View, NativeWind v4 forces the icon inline */}
            <View className="bg-white shadow-md shadow-zinc-300 rounded-full w-full flex-row items-center justify-center py-4">
              <Image 
                source={icons.google} 
                className="w-5 h-5 mr-2" 
                resizeMode="contain" 
              />
              <Text className="text-lg font-rubik-medium text-black-300">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn