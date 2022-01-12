import fetch from "node-fetch";
import { v4 as uuid } from "uuid";

/**
 * Generate a validator.
 *
 * @Param {string} deviceID - The device identified, UUID format prefixed with "LDID-".
 * @Param {string?} versionID - The version identifier taken from LunarCRUSH website.
 * Defaults to "lunar-20211013"'s ID. This is only required if LunarCRUSH updates their site.
 */
export const getValidator = (deviceID, versionID) => {
  const _versionID = (versionID || "GtlZn1NfoVuhQ4p9mdveb26zFPBrwyTMXRCJUIAY7giqc3SLOWD80xHKE5sjka").split("");
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456790".split("");

  return deviceID
    .split("-")
    .slice(1)
    .join("")
    .split("")
    .map((char) => letters[_versionID.indexOf(char)])
    .join("");
};

/**
 * Generate a LunarCRUSH API URL with valid paramaters.
 *
 * @Param {string?} version - LunarCRUSH version, defaults to "lunar-20211013"
 * @Param {string?} deviceID - The device identified, UUID format prefixed with "LDID-". Generates random if null.
 * @Param {string?} versionID - The version identifier taken from LunarCRUSH website.
 * Defaults to "lunar-20211013"'s ID. This is only required if LunarCRUSH updates their site.
 */
export const getURL = (version, deviceID, versionID) => {
  const base = "https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Firefox&";
  const _deviceID = deviceID || `LDID-${uuid()}`;
  const params = [
    `deviceId=${_deviceID}`,
    `validator=${getValidator(_deviceID, versionID)}`,
    `clientVersion=${version || "lunar-20211013"}`,
  ];

  return base + params.join("&");
};

/**
 * Generate a LunarCRUSH API key.
 *
 * @Param {string?} version - LunarCRUSH version, defaults to "lunar-20211013"
 * @Param {string?} deviceID - The device identified, UUID format prefixed with "LDID-". Generates random if null.
 * @Param {string?} versionID - The version identifier taken from LunarCRUSH website.
 * Defaults to "lunar-20211013"'s ID. This is only required if LunarCRUSH updates their site.
 */
export const getKey = async (version, deviceID, versionID) => {
  const url = getURL(version || "lunar-20211013", deviceID, versionID);
  const res = await fetch(url);
  const json = await res.json();
  const token = json.token;

  return token;
};

