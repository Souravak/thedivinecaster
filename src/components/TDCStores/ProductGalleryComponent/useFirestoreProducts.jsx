import { useEffect, useState } from 'react';
import firebase from '../../../firebase';
import localProducts from '../ProductDetails/ProductDetails';

// Existing bundled images remain available while new images can be added to
// public/products and referenced by filename from Firestore.
const bundledProducts = localProducts.map((product, index) => ({
  ...product,
  id: 'bundled-' + index
}));

const localImages = new Map(localProducts.map(product => [
  String(product.name).trim().toLowerCase(),
  product.img
]));

const publicBase = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

const resolveImage = (product) => {
  const raw = String(product.img || '').trim();
  if (raw.startsWith('https://') || raw.startsWith('http://')) return raw;

  // A new Firestore product may specify /products/file.webp or file.webp.
  if (raw.startsWith('/products/')) return publicBase + raw;
  if (raw.startsWith('products/')) return publicBase + '/' + raw;
  if (raw && !raw.includes('/')) {
    // Prefer an existing bundled image for legacy Firebase filenames.
    const bundled = localImages.get(String(product.name || '').trim().toLowerCase());
    return bundled || publicBase + '/products/' + encodeURIComponent(raw);
  }

  return localImages.get(String(product.name || '').trim().toLowerCase()) || null;
};

const useFirestoreProducts = () => {
  const [products, setProducts] = useState(bundledProducts);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const snapshot = await firebase.firestore().collection('products').get();
        if (!mounted || snapshot.empty) return;

        const liveProducts = snapshot.docs.map(doc => {
          const product = { id: doc.id, ...doc.data() };
          return { ...product, img: resolveImage(product) };
        });

        if (mounted) {
          setProducts(liveProducts);
          setNotice('');
        }
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
