class DbConnection {
  constructor() {
    // Simulate database connection setup (e.g., using an object)
    this.connection = {
      query: (sql) => {
        // Simulate executing a query
        console.log(`Executing query: ${sql}`);
        // Return mock data
        return [
          { id: 1, name: "John" },
          { id: 2, name: "Alice" },
        ];
      },
    };
  }

  static getInstance() {
    if (!DbConnection.instance) {
      DbConnection.instance = new DbConnection();
      console.log('Connection established.');
    }
    return DbConnection.instance;
  }
}

export default DbConnection;
