const { Firestore } = require('@google-cloud/firestore');

async function getAllData() {
    const db = new Firestore();
  
    const predictCollection = db.collection('prediction');
    const snapshot = await predictCollection.get();
  
    if (snapshot.empty) {
      console.log('No matching documents.');
      return [];
    }
  
    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });
  
    return data;
  }

module.exports = getAllData;