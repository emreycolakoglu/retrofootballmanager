import db from "@rfm/dexie-database";
import { useLiveQuery } from "dexie-react-hooks";
import { useNavigate } from "react-router-dom";
import { NewsScroller } from "../../../shared/components";

export function DataNewsScroller() {
  const news = useLiveQuery(() => db.news.orderBy("id").limit(10).toArray());
  const navigate = useNavigate();

  return (
    <NewsScroller
      news={
        news?.map((n) => ({
          label: n.title,
          onClick: () => navigate("/news"),
        })) || []
      }
    />
  );
}
