import { getKey, getURL } from "../src/lib.js";

(async () => {
  console.log("getKey(): " + await getKey());
  console.log("getURL(): " + await getURL());
})();

