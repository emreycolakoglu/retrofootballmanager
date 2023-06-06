import { VersionLabel } from "@rfm/ui-components";
import versionData from "../../../../../gameVersion";

export function DataVersionLabel() {
  return <VersionLabel version={versionData.version} />;
}
