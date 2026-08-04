const verbs = [
  "Downloading",
  "Resolving",
  "Building",
  "Optimizing",
  "Installing",
  "Compiling",
  "Verifying",
  "Scanning"
];

const objects = [
  "dependency",
  "package",
  "module",
  "asset",
  "plugin",
  "runtime",
  "cache",
  "configuration"
];

for (let i = 1; i <= 6000; i++) {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const percent = (Math.random() * 100).toFixed(2);

  console.log(
    `${verb} ${object} #${Math.floor(Math.random() * 99999)}... ${percent}%`
  );
}

console.log("✔ Done");