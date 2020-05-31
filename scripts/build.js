const { readdirSync, readFileSync, writeFileSync } = require("fs");
const path = require("path");

function main() {
  const dir = path.join(process.cwd(), "blogs");
  const filePaths = readdirSync(dir, "utf-8");
  const blogs = filePaths.map((filePath) => {
    const file = path.join(process.cwd(), path.join("blogs", filePath));
    const content = readFileSync(file, "utf-8");
    const json = JSON.parse(content);
    return json;
  });
  writeFileSync(
    path.join(process.cwd(), "database.json"),
    JSON.stringify({
      blogs,
    })
  );
}

main();
