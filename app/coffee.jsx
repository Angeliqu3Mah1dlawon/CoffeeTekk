import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const Coffee = () => {
  // Function to handle when the caffeine content is pressed
  const handlePress = (caffeine) => {
    Alert.alert("Caffeine Content", `${caffeine} mg`);
  };

  return (
    <View className="flex-1 bg-[#E8D7B8]">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Image 
          source={require('../assets/images/cofes.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 16, resizeMode: 'contain' }} 
        />
        {/* Coffee name */}
        <Text className="text-xl font-semibold mb-2">Macchiato</Text>
        {/* Coffee Image */}
        <Image 
          source={require('../assets/images/macchiato.jpg')} 
          style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} 
        />
        {/* Coffee Description */}
        <Text className="text-gray-700 mt-2">
          A Macchiato is an espresso coffee drink with a small amount of steamed milk added. The name means "stained" or "spotted," referring to the addition of milk.
        </Text>
        {/* Button that pops up caffeine content when pressed */}
        <TouchableOpacity onPress={() => handlePress(75)} className="mt-2 p-2 rounded-lg bg-green-200">
          <Text className="text-lg font-semibold">Caffeine Content: 75 mg</Text>
        </TouchableOpacity>

        <Text className="text-xl font-semibold mt-4 mb-2">Espresso</Text>
        <Image 
          source={require('../assets/images/espresso.jpg')} 
          style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} 
        />
        <Text className="text-gray-700 mt-2">
          Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It's known for its rich flavor and creamy consistency.
        </Text>
        <TouchableOpacity onPress={() => handlePress(63)} className="mt-2 p-2 rounded-lg bg-yellow-200">
          <Text className="text-lg font-semibold">Caffeine Content: 63 mg</Text>
        </TouchableOpacity>

        <Text className="text-xl font-semibold mt-4 mb-2">Americano</Text>
        <Image 
          source={require('../assets/images/americano.jpg')} 
          style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} 
        />
        <Text className="text-gray-700 mt-2">
          An Americano is made by diluting an espresso with hot water, giving it a similar strength to brewed coffee while retaining its distinct espresso flavor.
        </Text>
        <TouchableOpacity onPress={() => handlePress(95)} className="mt-2 p-2 rounded-lg bg-orange-200">
          <Text className="text-lg font-semibold">Caffeine Content: 95 mg</Text>
        </TouchableOpacity>

        <Text className="text-xl font-semibold mt-4 mb-2">Mocha</Text>
        <Image 
          source={require('../assets/images/mocha.jpg')} 
          style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain' }} 
        />
        <Text className="text-gray-700 mt-2">
          A Mocha is a chocolate-flavored variant of a latte, made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.
        </Text>
        <TouchableOpacity onPress={() => handlePress(90)} className="mt-2 p-2 rounded-lg bg-red-200">
          <Text className="text-lg font-semibold">Caffeine Content: 90 mg</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Coffee;
