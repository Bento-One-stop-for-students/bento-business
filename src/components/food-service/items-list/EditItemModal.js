import React from "react";

import { Modal } from "native-base";
import Button from "../../shared/Button";
import TextBox from "../../shared/TextBox";
import InputField from "../../shared/InputField";
import { deleteItem, updateItem } from "../../../../lib/firebase/snackmen";
import { ActivityIndicator, Pressable, ToastAndroid, View } from "react-native";

const EditItemModal = (props) => {
  const [disabled, setDisbaled] = React.useState(false);
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

  const handleEditItem = async () => {
    try {
      if (
        itemName == "" ||
        itemPrice == "" ||
        itemQty == "" ||
        itemImgUrl == ""
      ) {
        ToastAndroid.showWithGravityAndOffset(
          "Values cannot be empty",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
        return;
      }
      setDisbaled("edit");
      await updateItem(props.itemData.id, {
        name: itemName,
        price: parseInt(itemPrice.trim()),
        qty: parseInt(itemQty.trim()),
        img_url: itemImgUrl,
      });
      ToastAndroid.showWithGravityAndOffset(
        "Item updated successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      setItemName(props.itemData.name.toString());
      setItemPrice(props.itemData.price.toString());
      setItemQty(props.itemData.qty.toString());
      setItemImgUrl(props.itemData.img_url.toString());
      props.onClose(false);
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        "Couldn't update item. Try again later",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      console.log(error);
    } finally {
      setDisbaled(false);
    }
  };

  const handleDeleteItem = async () => {
    try {
      setDisbaled("delete");
      await deleteItem(props.itemData.id);
      ToastAndroid.showWithGravityAndOffset(
        "Successfully deleted item",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravityAndOffset(
        "Couldn't delete item",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } finally {
      setDisbaled(false);
      props.onClose(false);
    }
  };
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
        <Modal.Header>
          <View className="flex-row items-center ">
            <TextBox class="mr-5">Edit Item</TextBox>
            <Pressable
              className="w-16 py-2 rounded-xl bg-red-500 items-center"
              onPress={handleDeleteItem}
            >
              {disabled == "delete" ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <TextBox class="text-white">Delete</TextBox>
              )}
            </Pressable>
          </View>
          <Modal.CloseButton />
        </Modal.Header>

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
            text="Edit Item"
            disabled={
              itemName == "" ||
              itemPrice == "" ||
              itemQty == "" ||
              itemImgUrl == "" ||
              disabled == "edit"
            }
            onPress={handleEditItem}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default EditItemModal;
