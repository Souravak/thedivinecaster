import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const useFirestoreProducts = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const productsCollection = db.collection('products');
        const snapshot = await productsCollection.get();
        const data = snapshot.docs.map(async doc => {
          const productData = doc.data();
          // Get image URL from Firebase Storage
          const imageUrl = await getImageUrl(productData.img);
          return {
            id: doc.id,
            ...productData,
            img: imageUrl
          };
        });
        // Wait for all promises to resolve
        const productsData = await Promise.all(data);
        setProducts(productsData);
      };
  
      fetchData();
    }, []);
  
    const getImageUrl = async (filename) => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child('Gallery/' + filename);
        const imageUrl = await imageRef.getDownloadURL();
        return imageUrl;
    };
      
      
  
    return products;
  };
  
  export default useFirestoreProducts;