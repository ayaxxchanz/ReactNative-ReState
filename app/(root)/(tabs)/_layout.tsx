import { Tabs } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
    <View className="flex-1 mt-3 flex-col items-center">
        <Image source={icon}
        style={{ width: 24, height: 24 }}
        tintColor={focused ? '#0061ff' : '#666876'}
        resizeMode='contain'
        className='size-6'
        />

        <Text className={`${focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    
    return (
        <Tabs screenOptions={{
            tabBarLabelVisibilityMode: 'unlabeled',
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopWidth: 1,
                borderTopColor: '#0061FF1A',
                minHeight: 70

            }
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.home} focused={focused} title="Home" />
                )

            }} />
            <Tabs.Screen name="explore" options={{
                title: 'Explore',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.search} focused={focused} title="Explore" />
                )

            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon icon={icons.person} focused={focused} title="Profile" />
                )

            }} />
        </Tabs>
    )
}

export default TabsLayout