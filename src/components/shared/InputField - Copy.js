import React from "react";
import { Input } from "native-base";

const InputField = (props) => {
  const handleChange = (text) => props.onValueChange(text.trim());
  return (
    <Input
      size="lg"
      w="100%"
      fontFamily="Lato_400Regular"
      placeholder={props.placeholder}
      borderRadius={15}
      value={props.value}
      onChangeText={handleChange}
      autoCapitalize="none"
      keyboardType={props.numeric ? "numeric" : "name-phone-pad"}
      type={props.password ? "password" : "text"}
    />
  );
};

export default InputField;
