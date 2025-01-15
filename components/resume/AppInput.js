import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import { useLocalSearchParams } from "expo-router";

const AppInput = ({ title, multiline = false }) => {
  const [value, setvalue] = useState("");
  const textHeightRef = useRef(null);
  //{ height: textRef.current }
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[multiline ? styles.multilineContainer : styles.input]}
        value={value}
        onContentSizeChange={(e) => {
          textHeightRef.current.value = e.nativeEvent?.contentSize?.height;
          console.log(e.nativeEvent, textHeightRef);
        }}
        onChangeText={(t) => setvalue(t)}
        multiline={multiline}
      />
      <Text style={styles.titleText}>{title || "shakhja"}</Text>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    height: "8%",
    width: "95%",
    borderRadius: 15,
    borderColor: COLORS.gray2,
    borderWidth: 2,
    marginVertical: "1%",
  },
  input: {
    marginTop: "1%",
    marginBottom: "0.5%",
    // backgroundColor: "green",
    // height: "90%",
    flex: 1,
    marginHorizontal: "1.5%",
    outlineStyle: "none",
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  titleText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    position: "absolute",
    top: "-20%",
    left: "1%",
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: "1%",
  },
});
