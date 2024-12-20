import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{description || info}</Text>
      </View>
    </View>
  );
};

export default About;
