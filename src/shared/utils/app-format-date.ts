import { format, parseISO } from "date-fns";

export function appFormatDate(date: string) {
  return format(parseISO(date), "dd-MM-yyyy HH:mm");
}
