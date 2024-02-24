// firebaseFunctions.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const updateFirestoreControllerData = async (selectedController_RUN, selectedController_DURATION) => {
  console.log('firestore has been called');
  const db = firebase.firestore();
  const controllerRef = db.collection('controller').doc('status');

  try {
    await controllerRef.update({ run: selectedController_RUN, duration: selectedController_DURATION });
    console.log('Data updated successfully!');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export default updateFirestoreControllerData;
