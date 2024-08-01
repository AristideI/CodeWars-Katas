function trim(str, size) {
  if (size >= str.length) return str;
  if (str.length - 3 <= 0) return str.split("").slice(0, size).join("") + "...";
  return size - 3 <= 0
    ? str.split("").slice(0, size).join("") + "..."
    : str
        .split("")
        .slice(0, size - 3)
        .join("") + "...";
}
