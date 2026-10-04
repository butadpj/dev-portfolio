/** Class composition for the locally owned shadcn-solid components. */
export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
