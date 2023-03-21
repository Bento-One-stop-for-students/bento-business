import Constants from "expo-constants";
import firestore from "@react-native-firebase/firestore";
import axios from 'axios'

const db = firestore();
const env = Constants.expoConfig.extra.firebaseEnv.trim();


export const getBarberBookingQueue = (setState) => {
  db.collection(`bento/${env}/barber`)
    .orderBy("timestamp")
    .onSnapshot((success, error) => {
      const data = success.docs.map((booking) => {
        return { booking_id: booking.id, ...booking.data() };
      });
      setState(data);
    });
};

//--
export const deleteBarberBooking = async (bookingId) => {
  try {
    await axios.delete(`https://us-central1-bento-5ad4e.cloudfunctions.net/app/api/barber/delete/${bookingId}`)
  } catch (err) {
    throw err;
  }
};
