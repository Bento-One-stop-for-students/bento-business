import { View } from "react-native";
import React from "react";
import TextBox from "../../components/shared/TextBox";
import { StatusBar } from "expo-status-bar";
import InputField from "../../components/shared/InputField";
import Button from "../../components/shared/Button";
import { KeyboardAvoidingView } from "react-native";
import { AuthContext } from "../../../lib/context/authContext";
import ErrorModal from "../../components/shared/ErrorModal";
import auth from "@react-native-firebase/auth";

const SignIn = ({ navigation, route }) => {
  const { state, dispatch } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showErrorModal, setShowErrorModal] = React.useState(false);
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
            password={true}
          />
        </View>
        <Button
          text="Sign In"
          onPress={() => {
            auth()
              .signInWithEmailAndPassword(email, password)
              .then((userCredential) => {
                console.log(userCredential.user);
                console.log("User account created & signed in!");
                dispatch({
                  type: "SIGN_IN",
                  payload: {
                    profession: route.params.profession,
                    uid: userCredential.user.uid,
                  },
                });
                console.log({
                  profession: route.params.profession,
                  uid: userCredential.user.uid,
                });
              })
              .catch((error) => {
                setShowErrorModal(true);
                console.error(error);
              });
          }}
          disabled={
            email == "" || password == "" || password.length < 8 ? true : false
          }
        />
      </View>
      <ErrorModal
        isOpen={showErrorModal}
        onClose={setShowErrorModal}
        title="Invalid Credentials"
        error="Invalid email or password"
      />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
