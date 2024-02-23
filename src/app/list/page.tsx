import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((x, index) => {
        return (
          <div className="list-item" key={index}>
            <h2>
              <Link prefetch={false} href={`/detail/${x._id}`}>{x.title}</Link>
            </h2>
            <h4>{x.content}</h4>
            <p>1월 1일</p>
            <DetailLink></DetailLink>
          </div>
        );
      })}
    </div>
  );
}
