import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import React from 'react';

const Notif = () => {
  return (
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={{ flex: 1 }} 
    >
    {/* Notification page that notifies events related to coffee */}
    <View className="flex-1">
      <Text className="text-xl font-light ml-4 mt-4">Notifications</Text>
      
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Container for Notification */}
        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            {/* Notification Icon */}
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            {/* Notification Content */}
            <Text className="text-lg font-semibold ml-2">Nearby Coffee Shop</Text>
          </View>
          <Text className="text-gray-700 mt-2">Star Pugs Coffee is now open near you! Visit us for the best brews.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text className="text-lg font-semibold ml-2">Coffee Brewing Tips</Text>
          </View>
          <Text className="text-gray-700 mt-2">Check out our latest guide on mastering cold brew coffee at home.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text className="text-lg font-semibold ml-2">Coffee Day Special</Text>
          </View>
          <Text className="text-gray-700 mt-2">Get 10% off all drinks at Coffee Day this weekend!</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text className="text-lg font-semibold ml-2">New Brewing Technique</Text>
          </View>
          <Text className="text-gray-700 mt-2">Learn how to perfect your French Press brewing technique.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text className="text-lg font-semibold ml-2">Upcoming Coffee Event</Text>
          </View>
          <Text className="text-gray-700 mt-2">Join us for a coffee tasting event at Coffee Co. this Saturday!</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/notif.png')}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text className="text-lg font-semibold ml-2">New Espresso Article</Text>
          </View>
          <Text className="text-gray-700 mt-2">Read our new article on the art of making espresso.</Text>
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default Notif;
