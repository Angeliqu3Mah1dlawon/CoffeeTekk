import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={{ flex: 1 }}
    >
      <ScrollView className="px-4">
        <View className="flex-row items-center mt-4 mb-4 bg-[#E8D7B8] rounded-full shadow-lg">
          <Image
            source={require('../../assets/images/search.png')}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search coffee.."
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
              backgroundColor: 'transparent',
            }}
          />
        </View>

        <Text className="mt-2 mb-2 text-sm font-light">Educational Content</Text>
        <Link href="/home" asChild>
          <TouchableOpacity 
            className="flex-row justify-start items-start bg-[#F5EBD0] rounded-lg border border-[#9C8842] shadow-lg p-4"
            activeOpacity={0.8}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text className="text-xl font-light text-black mb-2">
                Everything you need to know about coffee
              </Text>
              <Text className="text-sm font-light text-gray-500">
                Discover tips, facts, and more about your favorite brew.
              </Text>
            </View>
            <Image
              source={require('../../assets/images/everything.png')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>

        <Text className="mt-2 mb-2 text-sm font-light">Coffee Making Tips</Text>
        <Link href="/home" asChild>
          <TouchableOpacity 
            className="flex-row justify-start items-start bg-[#F5EBD0] rounded-lg border border-[#9C8842] shadow-lg p-4"
            activeOpacity={0.8}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text className="text-xl font-light text-black mb-2">
                How to grind and drink leisurely
              </Text>
              <Text className="text-sm font-light text-gray-500">
                Your ultimate guide on brewing your coffee.
              </Text>
            </View>
            <Image
              source={require('../../assets/images/maker.jpg')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>

        <Link href="/coffee" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6 bg-[#D7C9A8] rounded-lg p-4 border border-[#9C8842] shadow-lg"
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/images/kape.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Coffee Picker</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/beans" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6 bg-[#D7C9A8] rounded-lg p-4 border border-[#9C8842] shadow-lg"
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/images/beans.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Coffee Beans</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/home" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6 mb-4 bg-[#FFB319] rounded-full p-4 border border-[#9C8842] shadow-lg"
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/images/crown.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Loyalty Points</Text>
          </TouchableOpacity>
        </Link>

        <Link href="data" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-2 mb-4 bg-[#00AE58] rounded-full p-4 border border-[#9C8842] shadow-lg"
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/images/data.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Numerical Data</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
