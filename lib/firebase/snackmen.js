import Constants from "expo-constants";
import firestore from "@react-native-firebase/firestore";
import axios from "axios";

const db = firestore();
const env = Constants.expoConfig.extra.firebaseEnv.trim();
const firebaseUrl = Constants.expoConfig.extra.firebaseUrl;

export const getAllFoodItems = (setState) => {
  db.collection(`bento/${env}/food`).onSnapshot((success, error) => {
    const foodItems = success.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    setState(foodItems);
  });
};

export const updateSnackmenServiceStatus = async (isOpen, uid) => {
  try {
    await axios.get(`${firebaseUrl}/snackmen/status/${uid}?isOpen=${isOpen}`);
  } catch (err) {
    throw err;
  }
};

export const setDeliveredOrder = async (userId, orderId) => {
  try {
    await axios.get(
      `${firebaseUrl}/snackmen/delivery?userId=${userId}&orderId=${orderId}`
    );
  } catch (err) {
    throw err;
  }
};

export const getTodayOrders = (setState) => {
  db.collection(`bento/${env}/todayOrders`)
    .orderBy("timestamp", "desc")
    .onSnapshot((success, error) => {
      const data = success.docs.map((order) => {
        return { order_id: order.id, ...order.data() };
      });
      setState(data);
    });
};

export const addNewITem = async (data) => {
  try {
    await axios.post(`${firebaseUrl}/snackmen/item/add`, data);
  } catch (err) {
    throw err;
  }
};

export const deleteItem = async (itemId) => {
  try {
    await axios.delete(`${firebaseUrl}/snackmen/item/delete/${itemId}`);
  } catch (err) {
    throw err;
  }
};

export const updateItem = async (itemId, data) => {
  try {
    await axios.put(`${firebaseUrl}/snackmen/item/update/${itemId}`, data);
  } catch (err) {
    throw err;
  }
};
