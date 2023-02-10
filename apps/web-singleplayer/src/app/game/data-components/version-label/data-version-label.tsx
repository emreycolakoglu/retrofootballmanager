import { VersionLabel } from "../../../shared/components";
import versionData from "../../../../../gameVersion";

export function DataVersionLabel() {
  return <VersionLabel version={versionData.version} />;
}
