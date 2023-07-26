import { View, StyleSheet, ImageBackground } from "react-native";
import { styled } from "nativewind";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./components/StartGameScreen";
export default function App() {
  const StyledView = styled(View);
  const StyledImageBackground = styled(ImageBackground);
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StyledImageBackground source={require('./assets/background.png')} className="flex-1" resizeMode="cover" imageStyle={styles.innerImage} >
        <StartGameScreen />
      </StyledImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  innerImage:{
    opacity:0.15
  }
});
