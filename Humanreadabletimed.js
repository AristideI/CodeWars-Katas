function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const units = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  const results = [];

  for (const [name, value] of Object.entries(units)) {
    if (seconds >= value) {
      const count = Math.floor(seconds / value);
      seconds -= count * value;

      results.push(`${count} ${name}${count > 1 ? "s" : ""}`);
    }
  }

  if (results.length === 1) {
    return results[0];
  }

  const last = results.pop();

  return `${results.join(", ")} and ${last}`;
}
