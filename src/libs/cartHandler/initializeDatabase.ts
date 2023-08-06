function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const dbOpenRequest = indexedDB.open("main", 1);

    dbOpenRequest.onupgradeneeded = (event) => {
      const database = dbOpenRequest.result;

      if (!database.objectStoreNames.contains("cart")) {
        database.createObjectStore("cart", {
          keyPath: "id",
        });
      }
    };
    dbOpenRequest.onerror = function () {
      reject("failed");
    };
    dbOpenRequest.onsuccess = function () {
      // Database initialization successful actions (if any).
      dbOpenRequest.result.close();
      resolve("success");
    };
  });
}

export { initializeDatabase };
