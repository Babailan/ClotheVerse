function initializeDatabase() {
  const dbOpenRequest = indexedDB.open("main", 1);

  dbOpenRequest.onupgradeneeded = (event) => {
    const database = dbOpenRequest.result;

    if (!database.objectStoreNames.contains("cart")) {
      database.createObjectStore("cart", {
        keyPath: "id",
      });
    }
  };

  dbOpenRequest.onsuccess = () => {
    // Database initialization successful actions (if any).
    dbOpenRequest.result.close();
  };
}

export { initializeDatabase };
