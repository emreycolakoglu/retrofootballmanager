import db from "@rfm/feature-database";
import { useLiveQuery } from "dexie-react-hooks";
import { useNavigate } from "react-router-dom";
import { NewsScroller } from "@rfm/ui-components";

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
