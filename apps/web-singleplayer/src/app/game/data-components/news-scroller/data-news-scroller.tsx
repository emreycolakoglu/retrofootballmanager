import { NewsScroller } from "../../../shared/components";
import { useGameContext } from "../../../shared/contexts";

export function DataNewsScroller() {
  const { news } = useGameContext();
  return <NewsScroller news={news?.map((n) => ({ label: n })) || []} />;
}
