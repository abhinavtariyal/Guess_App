import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { styled } from "nativewind";
import { withExpoSnack } from "nativewind";
import { useState } from "react";
const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  StyledView = styled(View);
  StyledTextInput = styled(TextInput);

  const inputTextHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    console.log("hello I ahve been clicked");
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert("Invalid Number", "Number has to be in between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
    } else {
      console.log("valid number");
      setEnteredNumber("");
    }
  };
  return (
    <StyledView className="mt-24 p-4 bg-[#3c0d25] rounded-lg mx-6 shadow-sm flex justify-center items-center">
      <StyledTextInput
        className="h-[50] text-4xl border-b-[#ddb52f] text-[#ddb52f] border-b-2 font-bold w-12"
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autocorrect={false}
        value={enteredNumber}
        onChangeText={inputTextHandler}
      />
      <StyledView className="flex flex-row">
        <StyledView className="flex-1">
          <PrimaryButton>Reset</PrimaryButton>
        </StyledView>
        <StyledView className="flex-1">
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default withExpoSnack(StartGameScreen);
