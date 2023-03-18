import { View, Text } from "react-native";
import React from "react";
import { HStack, Modal, VStack } from "native-base";
import Button from "../../shared/Button";
import TextBox from "../../shared/TextBox";
import InputField from "../../shared/InputField";

const EditItemModal = (props) => {
  const [itemName, setItemName] = React.useState();
  const [itemPrice, setItemPrice] = React.useState();
  const [itemQty, setItemQty] = React.useState();
  const [itemImgUrl, setItemImgUrl] = React.useState();

  React.useEffect(() => {
    setItemName(props.itemData.name.toString());
    setItemPrice(props.itemData.price.toString());
    setItemQty(props.itemData.qty.toString());
    setItemImgUrl(props.itemData.img_url.toString());
  }, [props.itemData]);

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose(false);
        setItemName(props.itemData.name.toString());
        setItemPrice(props.itemData.price.toString());
        setItemQty(props.itemData.qty.toString());
        setItemImgUrl(props.itemData.img_url.toString());
      }}
      size={"xl"}
      closeOnOverlayClick={true}
      animationPreset="slide"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Body>
          <TextBox class="mt-2">Name </TextBox>
          <InputField
            placeholder="Enter Name"
            onValueChange={setItemName}
            value={itemName}
          />
          <TextBox class="mt-2">Price </TextBox>
          <InputField
            placeholder="Enter Price"
            onValueChange={setItemPrice}
            value={itemPrice}
            numeric
          />
          <TextBox class="mt-2">Quantity </TextBox>
          <InputField
            placeholder="Enter Quantity"
            onValueChange={setItemQty}
            value={itemQty}
            numeric
          />
          <TextBox class="mt-2">Image Url </TextBox>
          <InputField
            placeholder="Enter Image Url"
            onValueChange={setItemImgUrl}
            value={itemImgUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Add Item"
            disabled={
              itemName == "" ||
              itemPrice == "" ||
              itemQty == "" ||
              itemImgUrl == ""
                ? true
                : false
            }
            onPress={() => {
              props.setItemData({
                name: itemName,
                price: itemPrice,
                qty: itemQty,
                img_url: itemImgUrl,
              });
              console.log({
                name: itemName,
                price: itemPrice,
                qty: itemQty,
                img_url: itemImgUrl,
              });
            }}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default EditItemModal;
