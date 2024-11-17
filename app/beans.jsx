import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Beans = () => {
  return (
    // Page all about coffee infographics
    <View className="flex-1 bg-[#E8D7B8]">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Image 
          source={require('../assets/images/cofes.png')} 
          style={{ width: '100%', height: 200, borderRadius: 10, resizeMode: 'contain', marginBottom: 0 }} 
        />
        {/* Header*/}
        <Text className="text-2xl font-light mb-2">The 4 Different Types of Coffee Beans</Text>
        {/* Coffee Bean Name*/}
        <Text className="text-xl font-semibold mb-2">1. Arabica Coffee Beans (Coffea arabica)</Text>
        <Image source={require('../assets/images/arabica.jpeg')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
        {/* Coffee Bean Description*/}
        <Text className="text-gray-700 mt-2">
          Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee.
          These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed...
        </Text>

        <Text className="text-xl font-semibold mt-4 mb-2">2. Robusta Coffee Beans (Coffea canephora)</Text>
        <Image source={require('../assets/images/robusta.jpg')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
        <Text className="text-gray-700 mt-2">
          The second most popular type of coffee bean is Robusta. This bean originated in sub-Saharan Africa and is now grown primarily in Africa and Indonesia...
        </Text>

        <Text className="text-xl font-semibold mt-4 mb-2">3. Liberica Coffee Beans (Coffea liberica)</Text>
        <Image source={require('../assets/images/liberica.jpg')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
        <Text className="text-gray-700 mt-2">
          Native to central and western Africa, Coffea liberica is prized for its piquant floral aroma and bold, smoky flavor profile...
        </Text>

        <Text className="text-xl font-semibold mt-4 mb-2">4. Excelsa Coffee Beans (Coffea excelsa)</Text>
        <Image source={require('../assets/images/excelsa.jpeg')} style={{ width: '100%', height: 200, borderRadius: 10 }} />
        <Text className="text-gray-700 mt-2">
          The fourth major type of coffee bean is called Excelsa. Though it was once considered a separate coffee species, scientists recently reclassified it as a Liberica variant...
        </Text>

      </ScrollView>
    </View>
  );
};

export default Beans;
