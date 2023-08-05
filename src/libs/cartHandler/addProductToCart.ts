function addProductToCart(item: any, callback?: Function) {
  const dbOpenRequest = indexedDB.open("main", 1);

  dbOpenRequest.onerror = () => {
    console.error("Error opening IndexedDB:", dbOpenRequest.error);
  };

  dbOpenRequest.onsuccess = () => {
    const db = dbOpenRequest.result;
    const transaction = db.transaction("cart", "readwrite");
    const cartStore = transaction.objectStore("cart");

    transaction.onerror = (e: Event) => {
      const request = e.target as IDBRequest;
      console.error(request.error);
      db.close();
    };

    transaction.oncomplete = () => {
      console.log("Product added successfully");
      db.close();
    };

    cartStore.add(item);
    callback();
  };
}

export { addProductToCart };
