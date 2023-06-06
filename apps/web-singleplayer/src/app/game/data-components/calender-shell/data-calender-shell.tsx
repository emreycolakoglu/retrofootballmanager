import { CalenderShell, CalenderShellProps } from "@rfm/web-components";
import dayjs from "dayjs";

export function DataCalenderShell(props: CalenderShellProps) {
  const gameDate = Date.now();
  return (
    <CalenderShell
      line1={dayjs(gameDate).format("DD/MM/YYYY")}
      line2={dayjs(gameDate).format("HH:mm")}
      line3={dayjs(gameDate).format("dddd")}
    />
  );
}
