signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  dispatch({
    type: "SIGN_IN",
    payload: {
      profession: route.params.profession,
      uid: userCredential.user.uid,
    },
  });
  console.log({
    profession: route.params.profession,
    uid: userCredential.user.uid,
  });
})
.catch((error) => {
  setShowErrorModal(true);
  console.error(error);
});



