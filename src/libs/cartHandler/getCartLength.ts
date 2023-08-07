function getCartLength(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const request = indexedDB.open("main", 1);

    request.onerror = () => {
      reject(new Error("Failed to open indexedDB."));
    };

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("cart", "readonly");
      const cart = transaction.objectStore("cart");
      const countRequest = cart.count();

      transaction.oncomplete = () => {
        resolve(countRequest.result.toString());
        db.close();
      };

      transaction.onerror = () => {
        reject(new Error("Transaction failed."));
      };
    };
  });
}

export { getCartLength };
