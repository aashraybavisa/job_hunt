import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useRouter, Stack } from "expo-router";
//
import { COLORS, Icons, SIZES } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import AppInput from "../../components/resume/AppInput";

const AddResume = () => {
  const router = useRouter();
  const renderHeader = () => {
    return (
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={Icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "Add Resume",
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      {renderHeader()}
      <View style={styles.container}>
        <AppInput title={"Resume Title"} />
        <AppInput title={"Resume Details"} multiline={true} />
      </View>
    </SafeAreaView>
  );
};

export default AddResume;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    flex: 1,
    padding: SIZES.xSmall,
    alignItems: "center",
  },
});
