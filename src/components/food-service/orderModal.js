import React from "react";
import { HStack, Modal, VStack } from "native-base";
import TextBox from "../shared/TextBox";

const OrderModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => props.onClose(false)}
      size="lg"
      animationPreset="slide"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Order</Modal.Header>
        <Modal.Body>
          <VStack space={3}>
            <HStack className="w-full items-center justify-around">
              <TextBox class="font-bold">Name</TextBox>
              <TextBox class="font-bold">Quantity</TextBox>
              <TextBox class="font-bold">Price</TextBox>
            </HStack>
            {props.item.cart.map((item) => {
              return (
                <HStack
                  key={item.id}
                  className="w-full items-center justify-around"
                >
                  <TextBox>{item.name}</TextBox>
                  <TextBox>{item.qty}</TextBox>
                  <TextBox>{item.price}</TextBox>
                </HStack>
              );
            })}
          </VStack>
        </Modal.Body>
        <Modal.Footer className="items-center justify-around flex-row">
          <TextBox bold>Total</TextBox>
          <TextBox bold>Rs {props.item.total}</TextBox>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default OrderModal;
