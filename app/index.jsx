import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-6 flex-1 justify-center items-center">
         
          <Image
            source={images.logo}
            className="w-[300] h-[300] mb-8"
            resizeMode="contain"
          />
          <Text className="text-2xl  text-white text-center mb-4">
            A place to adopt suitable companions for your home!
          </Text>

          <Text className="text-lg text-gray-400 text-center mb-6">
          Take a coffee break!
          </Text>

          <CustomButton
            title="Login"
            handlePress={() => router.push('/auth/login')}
            containerStyles="w-full px-6 py-3 bg-yellow-600 rounded-lg shadow-md m-2"
            className="text-white"
          />
          <CustomButton
            title="Sign Up"
            handlePress={() => router.push('/auth/signup')}
            containerStyles="w-full px-6 py-3 bg-yellow-700 rounded-lg shadow-md"
            className="text-white mt-2"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
