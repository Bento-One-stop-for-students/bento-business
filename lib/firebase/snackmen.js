import firestore from '@react-native-firebase/firestore';
const db = firestore();
const env = process.env.FIREBASE_ENV.trim()

export const updateSnackmenServiceStatus = async () => {
  // try {
  //   await setDoc(
  //     doc(db, "status", state.uid),
  //     {
  //       status: `${isOpen ? "OPEN" : "CLOSED"}`,
  //     },
  //     { merge: true }
  //   );
  // } catch (err) {
  //   console.log(err);
  // }
  try {
    await db.collection(`bento/${env}/status`).doc(state.uid).set({
      status: `${isOpen ? "OPEN" : "CLOSED"}`
    },{merge:true})
  }catch(err) {
    throw err;
  }
};

export const setDeliveredOrder = async(userId,orderId) => {
  try {
    const deletion = db.collection(`bento/${env}/todayOrders`).doc(orderId).delete();
    const setter = db.collection(`bento/${env}/users/${userId}/orders`).doc(orderId).set({
      is_delivered: true
    },{merge:true})
    await Promise.all([deletion,setter])
  }catch(err) {
    throw err;
  }
}

export const getTodayOrders = () => {
  db.collection(`bento/${env}/todayOrders`).onSnapshot((success,error)=> {
    const data = success.docs.map(order => {
      return {orderId:order.id,...order.data()}
    })
    console.log(data)
  })
};

export const addNewITem = async(data) => {
  try {
    await db.collection(`bento/${env}/food`).add({...data})
  }catch(err) {
    throw err;
  }
};

export const deleteItem = async(itemId) => {
  try {
    await db.collection(`bento/${env}/food`).doc(itemId).delete()
  }catch(err) {
    throw err;
  }
};

export const updateItem = async(itemId,data) => {
  try {
    await db.collection(`bento/${env}/food`).doc(itemId).set({
      ...data
    },{merge:true})
  }catch(err) {
    throw err;
  }
};
