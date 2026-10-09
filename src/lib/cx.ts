export type ClassValue = string | false | null | undefined;

/** Concatena classes condicionais sem dependências externas. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
