import { VersionLabel } from "@rfm/web-components";
import versionData from "../../../../../gameVersion";

export function DataVersionLabel() {
  return <VersionLabel version={versionData.version} />;
}
