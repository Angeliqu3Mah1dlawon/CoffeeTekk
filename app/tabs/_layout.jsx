import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }} 
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        //Tab Layout for tab icons
        <Tabs 
            screenOptions={{
                tabBarStyle: { backgroundColor: '#FFCBA4' },
            }}
        >
            <Tabs.Screen
                name="shop"
                options={{
                    title: 'Nearby Shops',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.shop}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="feed"
                options={{
                    title: 'Community',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.feed}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="notif"
                options={{
                    title: 'Notifications',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.notif}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;