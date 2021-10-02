import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  colors: string[];
  title: string;
  subtitle?: string;
  enableBackButton?: boolean;
}

const Header = ({ colors, title, subtitle, enableBackButton }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors}
      style={Platform.OS === "android" && { paddingBottom: 20 }}
    >
      <SafeAreaView>
        {enableBackButton && (
          <View>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                position: "absolute",
                left: 10,
                top: 10,
                zIndex: 2,
              }}
            >
              <Image
                source={require("../../assets/back.png")}
                style={styles.image}
              />
            </Pressable>
          </View>
        )}

        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    tintColor: "#fff",
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 25,
    paddingVertical: 10,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    zIndex: -1,
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    paddingHorizontal: 20,
  },
});
