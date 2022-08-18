import { Severity } from "./Severity";

export type NotificationItem = {
  name: string,
  value: string,
  unit: string,
  severity: Severity,
};
