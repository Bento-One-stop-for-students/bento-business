import Constants from "expo-constants";
import firestore from "@react-native-firebase/firestore";
import axios from "axios";

const db = firestore();
const env = Constants.expoConfig.extra.firebaseEnv.trim();

export const getServiceStatus = async (uid) => {
  try {
    const status = await db.collection(`bento/${env}/status`).doc(uid).get();
    return status.data();
  } catch (err) {
    throw err;
  }
};

export const updateServiceStatus = async (uid, status) => {
  try {
    await axios.put(
      `https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/service/status/${uid}`,
      {
        status,
      }
    );
  } catch (error) {
    throw err;
  }
};
