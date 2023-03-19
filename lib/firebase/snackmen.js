import Constants from 'expo-constants';
import firestore from "@react-native-firebase/firestore";

const db = firestore();
const env= Constants.expoConfig.extra.firebaseEnv.trim();

export const getAllFoodItems = async () => {
  try {
    const items = await db.collection(`bento/${env}/food`).get();
    const foodItems = items.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return foodItems;
  } catch (err) {
    throw err;
  }
};

//--
export const updateSnackmenServiceStatus = async (isOpen, uid) => {
  try {
    await db
      .collection(`bento/${env}/status`)
      .doc(uid)
      .set(
        {
          status: `${isOpen ? "OPEN" : "CLOSED"}`,
        },
        { merge: true }
      );
  } catch (err) {
    throw err;
  }
};

//--
export const setDeliveredOrder = async (userId, orderId) => {
  try {
    const deletion = db
      .collection(`bento/${env}/todayOrders`)
      .doc(orderId)
      .delete();
    const setter = db
      .collection(`bento/${env}/users/${userId}/orders`)
      .doc(orderId)
      .set(
        {
          is_delivered: true,
        },
        { merge: true }
      );
    await Promise.all([deletion, setter]);
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

//--
export const addNewITem = async (data) => {
  try {
    await db.collection(`bento/${env}/food`).add({ ...data });
  } catch (err) {
    throw err;
  }
};

//--
export const deleteItem = async (itemId) => {
  try {
    await db.collection(`bento/${env}/food`).doc(itemId).delete();
  } catch (err) {
    throw err;
  }
};

//--
export const updateItem = async (itemId, data) => {
  try {
    await db
      .collection(`bento/${env}/food`)
      .doc(itemId)
      .set(
        {
          ...data,
        },
        { merge: true }
      );
  } catch (err) {
    throw err;
  }
};
