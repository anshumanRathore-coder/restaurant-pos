import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

const LocationSearch = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 26.9124,
    longitude: 75.7873,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  return (
    <View className="flex-1">
      <GooglePlacesAutocomplete
        placeholder="Search or move the map"
        fetchDetails={true}
        onPress={(data, details) => {
          const point = details?.geometry?.location;
          if (!point) return;
          setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        renderLeftButton={() => (
          <View className="absolute left-[15px] top-[18px] z-10">
            <Ionicons name="search-outline" size={24} color={Colors.medium} />
          </View>
        )}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            backgroundColor: Colors.grey,
            paddingLeft: 35,
            borderRadius: 10,
          },
          textInputContainer: {
            padding: 8,
            backgroundColor: "#fff",
          },
        }}
      />
      <MapView showsUserLocation={true} className="flex-1" region={location} />
      <View className="absolute bottom-5 w-full">
        <TouchableOpacity
          className="bg-[#20E1B2] p-4 mx-4 items-center rounded-lg"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white font-bold text-base">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSearch;
