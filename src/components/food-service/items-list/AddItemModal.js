import React from "react";

import { Modal } from "native-base";
import Button from "../../shared/Button";
import TextBox from "../../shared/TextBox";
import InputField from "../../shared/InputField";
import { addNewITem } from "../../../../lib/firebase/snackmen";

const AddItemModal = (props) => {
  const [disabled, setDisbaled] = React.useState(false);
  const [itemName, setItemName] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");
  const [itemQty, setItemQty] = React.useState("");
  const [itemImgUrl, setItemImgUrl] = React.useState("");

  const handleAddNewItem = async () => {
    try {
      setDisbaled(true);
      await addNewITem({
        name: itemName,
        price: parseInt(itemPrice.trim()),
        qty: parseInt(itemQty.trim()),
        img_url: itemImgUrl,
      });
      console.log({
        name: itemName,
        price: itemPrice,
        qty: itemQty,
        img_url: itemImgUrl,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setDisbaled(false);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose(false);
      }}
      size={"xl"}
      closeOnOverlayClick={true}
      animationPreset="slide"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Add Item</Modal.Header>
        <Modal.Body>
          <TextBox class="mt-2">Name </TextBox>
          <InputField placeholder="Enter Name" onValueChange={setItemName} />
          <TextBox class="mt-2">Price </TextBox>
          <InputField
            placeholder="Enter Price"
            onValueChange={setItemPrice}
            numeric
          />
          <TextBox class="mt-2">Quantity </TextBox>
          <InputField
            placeholder="Enter Quantity"
            onValueChange={setItemQty}
            numeric
          />
          <TextBox class="mt-2">Image Url </TextBox>
          <InputField
            placeholder="Enter Image Url"
            onValueChange={setItemImgUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Add Item"
            disabled={
              itemName == "" ||
              itemPrice == "" ||
              itemQty == "" ||
              itemImgUrl == "" ||
              disabled
            }
            onPress={handleAddNewItem}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default AddItemModal;
