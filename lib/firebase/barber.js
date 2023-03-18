import firestore from "@react-native-firebase/firestore";
const db = firestore();
const env = process.env.FIREBASE_ENV.trim();

export const updateBarberServiceStatus = async () => {
  try {
    await db
      .collection(`bento/${env}/status`)
      .doc(state.uid)
      .set(
        {
          status: `${isOpen ? (onBreak ? "BREAK" : "OPEN") : "CLOSED"}`,
        },
        { merge: true }
      );
  } catch (err) {
    throw err;
  }
};

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

export const deleteBarberBooking = async (bookingId) => {
  try {
    await db.collection(`bento/${env}/barber`).doc(bookingId).delete();
    console.log("successfully deleted");
  } catch (err) {
    throw err;
  }
};
