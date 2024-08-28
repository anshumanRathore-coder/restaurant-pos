import { View, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      // handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View className="flex-1">
        <View className="flex-row justify-center gap-[10px] mb-[32px]">
          <TouchableOpacity className="bg-primary px-[30px] py-[8px] rounded-full">
            <Text className="text-white bg-green-400 rounded-xl  px-4 py-3 font-bold">
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-[30px] py-[8px]  rounded-full">
            <Text className="text-green-600   px-4 py-3 font-bold ">
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-[16px] font-semibold m-[16px]">
          Your Location
        </Text>
        <Link href={"/(modal)/location-search"} asChild>
          <TouchableOpacity>
            <View className="flex-row items-center bg-white p-[16px] border border-gray-200">
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text className="flex-1">Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text className="text-[16px] font-semibold m-[16px]">Arrival time</Text>
        <TouchableOpacity>
          <View className="flex-row items-center bg-white p-[16px] border border-gray-200">
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text className="flex-1">Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <CustomButton
          title="Confirm"
          bgVariant="success"
          textVariant="success"
          className="mt-3 "
          onPress={() => dismiss()}
        />
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
