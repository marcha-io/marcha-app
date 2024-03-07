import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image source={require('./../../assets/images/login.png')} className="w-full h-auto object-cover"/>
      <View className="p-8 h-full shadow-xl bg-white rounded-t-3xl -mt-10">
        <Text className="text-4xl font-bold">Welcome to Marcha</Text>
        <Text className="text-lg text-slate-600">Please login to continue</Text>
        <TouchableOpacity onPress={onPress} className="bg-marcha p-4 mt-20 rounded-full">
          <Text className="text-white text-center text-base font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
