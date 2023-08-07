import { ProductData } from "../../type";

function getAllCartProducts() {
  return new Promise<ProductData[]>((resolve, reject) => {
    const dbRequest = indexedDB.open("main", 1);

    dbRequest.onsuccess = function () {
      const db = dbRequest.result;
      const transaction = db.transaction("cart", "readwrite");
      const cartStore = transaction.objectStore("cart");
      const cartProductsRequest = cartStore.getAll();

      transaction.oncomplete = function () {
        resolve(cartProductsRequest.result);
      };
      transaction.onerror = function () {
        reject(transaction.error.message);
      };
    };
  });
}

export { getAllCartProducts };
