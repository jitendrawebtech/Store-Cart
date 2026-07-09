export function normalizeString(search = "") {
  return search?.replace(/[^a-zA-Z0-9\s+#]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}