import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, Icons, Images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { getData } from "../utils";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const onClickSearch = () => {
    if (searchTerm !== "") {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={Icons.menu}
              dimension={"60%"}
              handlePress={() => router.push(`/resume/resume`)}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              uri={
                "https://media.licdn.com/dms/image/v2/D4E03AQE9sIX-MasfoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698198833294?e=1733961600&v=beta&t=6Gywcd3Aph4FnuTCQ53EC7jsKxvQfoGb9OS1sDCdPbs"
              }
              dimension={"100%"}
              handlePress={undefined}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={onClickSearch}
          />
          <Popularjobs />
          {/* <Nearbyjobs /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: SIZES.medium },
});
