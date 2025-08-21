// src/map/watcher.ts
import { FSWatcher } from "chokidar";
function watcher(configPath, config, ignored) {
  const watcher2 = new FSWatcher({
    ignoreInitial: true,
    persistent: true,
    ignored
  });
  watcher2.add(configPath);
  for (const collection of config.collections.values()) {
    if (collection.type === "docs") {
      watcher2.add(collection.docs.dir);
      watcher2.add(collection.meta.dir);
    } else {
      watcher2.add(collection.dir);
    }
  }
  return watcher2;
}
export {
  watcher
};
