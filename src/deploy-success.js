const firestore = require('./firebaseAdmin'); // Import Firestore instance

async function updateDeploymentStatus() {
  try {
    const docRef = firestore.collection('version-current').doc('current-version');

    // Get current date and time formatted as dd/mm/yyyy and HH:mm:ss
    const today = new Date();
    const date = today.toLocaleDateString('en-GB'); // Format date as dd/mm/yyyy
    const time = today.toLocaleTimeString('en-GB', { hour12: false }); // Format time as HH:mm:ss

   // Get old version from Firebase
   const docSnapshot = await docRef.get();
   let version = '1.0.0'; // Default version

   if (docSnapshot.exists) {
     const data = docSnapshot.data();
     version = data.version; // Get the old version
     // console.log('Old version: ' + version);

     // Increment the version
     const versionParts = version.split('.');
     const lastPart = parseInt(versionParts.pop(), 10) + 1; // Increment last part
     version = [...versionParts, lastPart].join('.'); // Join parts back together
   } else {
     // console.log('No such document!'); // Handle case where the document does not exist
   }

   // Update the Firestore document with new values
   await docRef.set({ date, time, version }); // Use set to ensure document creation if it doesn't exist
   // console.log('Current version updated successfully.');

   //--------------------------------------------------------------------------------------------------------
   // Updating version history log
   try {
     // Create the subcollection dynamically
     const docRefHistory = firestore.collection('version-history').doc(version);

     // Log the version for debugging
     // console.log('Updating version history for version:', version);

     // Data to be added
     const buildDetails = {
       date: date,                // Date field
       device: "rog",             // Device field
       status: "200",             // Status field
       time: time,                // Time field
       version: version           // Version field
     };

     // console.log('Collection Path:', `version-log/version-history/${version}/build-details`);

     // Add the document to the subcollection
     await docRefHistory.set(buildDetails); // Use merge to update existing fields or add new ones

     // console.log(`Version details for ${version} added successfully to history.`);
   } catch (error) {
     console.error('Error adding version details:', error);
   }

 } catch (error) {
   console.error('Error updating Firestore:', error);
 }
}

// Run the update function
updateDeploymentStatus();