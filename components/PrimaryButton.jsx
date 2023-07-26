import { View, Text, Button, Pressable } from "react-native";
import { styled } from "nativewind";
const PrimaryButton = ({ children, onPress }) => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledPressable = styled(Pressable);
  return (
    <StyledView className="m-2">
      <StyledPressable onPress = {onPress} className="bg-[#72063c] py-2 px-4 rounded-xl shadow-md active:bg-[#640233]">
        <StyledText className="text-white text-center">{children}</StyledText>
      </StyledPressable>
    </StyledView>
  );
};

export default PrimaryButton;
