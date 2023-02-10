import { CalenderShell, CalenderShellProps } from "../../../shared/components";
import dayjs from "dayjs";
import { useGameContext } from "../../../shared/contexts";

export function DataCalenderShell(props: CalenderShellProps) {
  const { gameDate } = useGameContext();
  return (
    <CalenderShell
      line1={dayjs(gameDate).format("DD/MM/YYYY")}
      line2={dayjs(gameDate).format("HH:mm")}
      line3={dayjs(gameDate).format("dddd")}
    />
  );
}
