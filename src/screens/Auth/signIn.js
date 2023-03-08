import { View} from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import { StatusBar } from "expo-status-bar";
import InputField from "../../components/shared/InputField";
import Button from "../../components/shared/Button";
import { KeyboardAvoidingView } from "react-native";
import { AuthContext } from "../../../lib/context/authContext";

const SignIn = ({ navigation, route }) => {
  const { state, dispatch } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    console.log({ password, email });
  }, [email, password]);

  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <KeyboardAvoidingView
      className="flex-1 items-center justify-center"
      behavior="height"
    >
      <View className="flex-1 bg-[#FBFBFB] items-center justify-start p-10">
        <StatusBar animated={true} backgroundColor="#FBFBFB" style="dark" />
        <TextBox class="text-4xl text-[#383838] mt-20">
          Sign in to your account
        </TextBox>
        <View className="mt-10  mx-5">
          <TextBox class="text-primary-1">Email</TextBox>
          <InputField placeholder="Email" onValueChange={setEmail} />
        </View>
        <View className="m-5">
          <TextBox class="text-primary-1">Password</TextBox>
          <InputField
            placeholder="Password"
            onValueChange={setPassword}
            password = {true}
          />
        </View>
        <Button
          text="Sign In"
          onPress={() => {
            dispatch({ type: "SIGN_IN", payload: route.params.profession });
          }}
          disabled={email == "" || password == "" ? true : false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
