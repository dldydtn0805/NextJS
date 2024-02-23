// app/utils/database.ts

import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:qwer1234@cluster0.6oynt6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 중 재실행을 막음
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
