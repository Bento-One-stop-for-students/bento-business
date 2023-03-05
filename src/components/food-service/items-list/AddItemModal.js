import { View, Text } from "react-native";
import React from "react";
import { HStack, Modal, VStack } from "native-base";

const AddItemModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose(false);
      }}
    >
      <Modal.CloseButton />
      <Modal.Header>Add Item</Modal.Header>
      <Modal.Content>
        <Modal.Body>
          <VStack item={3}></VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AddItemModal;
