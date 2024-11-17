import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const Shop = () => {
  return (
    // Page for Nearby Coffee Shops Located
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={{ flex: 1 }} 
    >
      <ScrollView className="px-4">
        <Image
          source={require('../../assets/images/coffelogo.png')}
          style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 20 }}
        />
        <View className="flex-row items-center justify-center mt-2">
          <Text className="text-lg font-light text-gray-50 mb-4">Nearby Coffee Shops Located</Text>
          <Image
            source={require('../../assets/images/loc.png')}
            style={{ width: 20, height: 20, marginLeft: 4, marginBottom: 18, marginRight: 60 }}
          />
        </View>

        {/* Coffee Shop Logo here */}
        <View className="mb-8 p-4 bg-[#B4A674] rounded-lg">
          <Image
            source={require('../../assets/images/starpugs.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }} 
            resizeMode="cover"
            className="self-center"
          />
          {/* Coffee Shop Name here */}
          <View className="mt-4">
            <Text className="text-xl font-semibold text-center">Star Pugs Coffee</Text>
            <View className="flex-row items-center mt-2 justify-center">
              <Image
                source={require('../../assets/images/loc.png')}
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
              {/* Shop location */}
              <Text>Luray 2, TC.</Text>
            </View>
            {/* Shop rating */}
            <Text className="mt-2 text-sm font-light text-center">Rating: 4.5/5</Text>
            <TouchableOpacity className="mt-4 p-2 bg-[#0E0B01] rounded-full">
              {/* Browsing Button */}
              <Text className="text-center text-white">Browse</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-8 p-4 bg-[#B4A674] rounded-lg">
          <Image
            source={require('../../assets/images/coffeeandbread.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }} 
            resizeMode="cover"
            className="self-center"
          />
          <View className="mt-4">
            <Text className="text-xl font-semibold text-center">Coffee and Bread</Text>
            <View className="flex-row items-center mt-2 justify-center">
              <Image
                source={require('../../assets/images/loc.png')}
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
              <Text>Poblacion.</Text>
            </View>
            <Text className="mt-2 text-sm font-light text-center">Rating: 4.9/5</Text>
            <TouchableOpacity className="mt-4 p-2 bg-[#0E0B01] rounded-full">
              <Text className="text-center text-white">Browse</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coffee Co */}
        <View className="mb-8 p-4 bg-[#B4A674] rounded-lg">
          <Image
            source={require('../../assets/images/coffeeco.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }} 
            resizeMode="cover"
            className="self-center"
          />
          <View className="mt-4">
            <Text className="text-xl font-semibold text-center">Coffee Co</Text>
            <View className="flex-row items-center mt-2 justify-center">
              <Image
                source={require('../../assets/images/loc.png')}
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
              <Text>Magsaysay Hills.</Text>
            </View>
            <Text className="mt-2 text-sm font-light text-center">Rating: 4.3/5</Text>
            <TouchableOpacity className="mt-4 p-2 bg-[#0E0B01] rounded-full">
              <Text className="text-center text-white">Browse</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coffee Day */}
        <View className="mb-8 p-4 bg-[#B4A674] rounded-lg">
          <Image
            source={require('../../assets/images/coffeeday.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }} 
            resizeMode="cover"
            className="self-center"
          />
          <View className="mt-4">
            <Text className="text-xl font-semibold text-center">Coffee Day</Text>
            <View className="flex-row items-center mt-2 justify-center">
              <Image
                source={require('../../assets/images/loc.png')}
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
              <Text>Hinulawan St.</Text>
            </View>
            <Text className="mt-2 text-sm font-light text-center">Rating: 4.7/5</Text>
            <TouchableOpacity className="mt-4 p-2 bg-[#0E0B01] rounded-full">
              <Text className="text-center text-white">Browse</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Star Bucks */}
        <View className="mb-8 p-4 bg-[#B4A674] rounded-lg">
          <Image
            source={require('../../assets/images/starbucks.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }} 
            resizeMode="cover"
            className="self-center"
          />
          <View className="mt-4">
            <Text className="text-xl font-semibold text-center">Star Bucks</Text>
            <View className="flex-row items-center mt-2 justify-center">
              <Image
                source={require('../../assets/images/loc.png')}
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
              <Text>Sta Ana.</Text>
            </View>
            <Text className="mt-2 text-sm font-light text-center">Rating: 4.8/5</Text>
            <TouchableOpacity className="mt-4 p-2 bg-[#0E0B01] rounded-full">
              <Text className="text-center text-white">Browse</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
};

export default Shop;
