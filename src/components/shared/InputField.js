import React from "react";
import { Input } from "native-base";

const InputField = (props) => {
  const handleChange = (text) => props.onValueChange(text);
  return (
    <Input
      size="lg"
      w="100%"
      fontFamily="Lato_400Regular"
      placeholder={props.placeholder}
      borderRadius={15}
      onChangeText={handleChange}
      autoCapitalize="none"
      type={props.password ? "password" : "text"}
    />
  );
};

export default InputField;
