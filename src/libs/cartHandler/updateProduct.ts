function updateProduct(id: string, order: string) {
  return new Promise((resolve, reject) => {
    const main = indexedDB.open("main", 1);
    main.onsuccess = function () {
      const transaction = main.result.transaction("cart", "readwrite");
      const cartStore = transaction.objectStore("cart");
      const getData = cartStore.get(id);
      getData.onsuccess = function () {
        const data = getData.result;
        data.order = order;
        cartStore.put(data);
      };
      transaction.oncomplete = function () {
        resolve("removed");
        main.result.close();
      };
      transaction.onerror = function () {
        reject(transaction.error.message);
        main.result.close();
      };
    };
  });
}

export { updateProduct };
