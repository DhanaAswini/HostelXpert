// lib/dbConnect.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cachedClient = null;
let cachedDb = null;

async function dbConnect() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    cachedClient = await mongoose.connect(MONGODB_URI);
    cachedDb = cachedClient.connection.db;
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;

// lib/dbConnect.js
/*import mongoose from "mongoose";

const MONGODB_URI = "your-mongodb-connection-string";

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cachedClient = null;
let cachedDb = null;

export async function dbConnect() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.connection.db;

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}*/

/*import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

/**
 * Global is used to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API Route usage.
 */
/*let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;*/
