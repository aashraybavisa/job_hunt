import { Image, TouchableOpacity } from "react-native";

import { styles } from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, uri }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl || { uri: uri }}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
