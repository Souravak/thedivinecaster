import { useEffect, useState } from 'react';
import firebase from '../../../firebase';
import localProducts from '../ProductDetails/ProductDetails';

const bundledProducts = localProducts.map((product, index) => ({
  ...product,
  id: 'bundled-' + index
}));

const useFirestoreProducts = () => {
  const [products, setProducts] = useState(bundledProducts);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const snapshot = await firebase.firestore().collection('products').get();
        if (!mounted || snapshot.empty) return;

        const localImages = new Map(localProducts.map(product => [
          String(product.name).trim().toLowerCase(), product.img
        ]));

        const liveProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // A Storage quota failure is not recoverable by retrying each image.
        // Use bundled images for matching products and keep the store usable.
        const quotaExceeded = sessionStorage.getItem('store-storage-quota-exceeded') === 'true';
        let quotaFailure = quotaExceeded;
        const resolved = [];

        for (const product of liveProducts) {
          const fallback = localImages.get(String(product.name || '').trim().toLowerCase());
          let image = fallback || null;

          if (!quotaFailure && product.img) {
            if (String(product.img).startsWith('https://')) {
              image = product.img;
            } else {
              try {
                image = await firebase.storage().ref('Gallery/' + product.img).getDownloadURL();
              } catch (error) {
                if (error.code === 'storage/quota-exceeded') {
                  quotaFailure = true;
                  sessionStorage.setItem('store-storage-quota-exceeded', 'true');
                } else {
                  console.warn('Product image unavailable:', error.code);
                }
              }
            }
          }

          resolved.push({ ...product, img: image });
        }

        if (!mounted) return;
        if (quotaFailure) {
          setNotice('Firebase product images are temporarily unavailable. Showing available local images.');
        }
        setProducts(resolved.some(product => product.img) ? resolved : bundledProducts);
      } catch (error) {
        console.warn('Unable to load live products:', error.code);
        if (mounted) {
          setProducts(bundledProducts);
          setNotice('Live products are temporarily unavailable. Showing the bundled catalog.');
        }
      }
    };

    load();
    return () => { mounted = false; };
  }, []);

  return { products, notice };
};

export default useFirestoreProducts;
