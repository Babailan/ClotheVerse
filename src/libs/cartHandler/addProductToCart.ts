import { Product, ProductData } from "../../type";

function addProductToCart(item: ProductData) {
  return new Promise<string>((resolve, reject) => {
    const dbOpenRequest = indexedDB.open("main", 1);

    dbOpenRequest.onerror = () => {
      reject("Error opening IndexedDB");
    };

    dbOpenRequest.onsuccess = () => {
      const db = dbOpenRequest.result;
      const transaction = db.transaction("cart", "readwrite");
      const cartStore = transaction.objectStore("cart");
      item.order = 1;
      item.date = Date.now();
      cartStore.add(item);
      transaction.onerror = (e: Event) => {
        const request = e.target as IDBRequest;
        if (
          request.error.message == "Key already exists in the object store."
        ) {
          resolve("transaction complete");
          db.close();
          return;
        }
        reject(request.error);
        db.close();
      };

      transaction.oncomplete = () => {
        resolve("transaction complete");
        db.close();
      };
    };
  });
}

export { addProductToCart };
