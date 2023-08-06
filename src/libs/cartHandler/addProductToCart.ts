import { Product } from "../../type";

function addProductToCart(item: Product) {
  return new Promise<string>((resolve, reject) => {
    const dbOpenRequest = indexedDB.open("main", 1);

    dbOpenRequest.onerror = () => {
      reject("Error opening IndexedDB");
    };

    dbOpenRequest.onsuccess = () => {
      const db = dbOpenRequest.result;
      const transaction = db.transaction("cart", "readwrite");
      const cartStore = transaction.objectStore("cart");
      cartStore.add(item);
      transaction.onerror = (e: Event) => {
        const request = e.target as IDBRequest;
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
