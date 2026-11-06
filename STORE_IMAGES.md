# Store product images

The Store no longer requests Firebase Storage download URLs.

## Adding a product image

1. Add a compressed .webp, .jpg or .png image to `public/products/` in this repository.
2. Commit and deploy the website. The new image becomes available at
   `https://souravak.github.io/thedivinecaster/products/your-image.webp`.
3. In Firestore > `products`, add or update a document with:
   - `name`: product name
   - `newPrice`: selling price (string or number)
   - `oldPrice`: original price
   - `myLink`: full purchase URL
   - `img`: `/products/your-image.webp` (or just `your-image.webp`)

Existing products with the same names as entries in
`src/components/TDCStores/ProductDetails/ProductDetails.jsx` continue using
their bundled `src/assets/Gallery` images when the Firestore `img` field
contains a legacy filename. Those bundled images require no migration.

Images whose URLs fail to load are hidden from the Store. Firestore remains
the source of product metadata; adding a file alone does not add a product.

GitHub Pages serves the `public/products` folder as static assets, not as a
writable upload API. Upload via GitHub and redeploy. Do not put GitHub access
tokens in frontend code.
