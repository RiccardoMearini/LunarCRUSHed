using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Text.Json;

namespace LunarCRUSHed
{
    public class LunarCRUSHed
    {
        /// <summary>
        /// Generate a validator.
        /// </summary>
        /// <param name="deviceID">The device identified, UUID format prefixed with "LDID-"</param>
        /// <param name="versionID">The version identifier taken from LunarCRUSH website.</param>
        public static string GetValidator(
            string deviceID,
            string versionID = "GtlZn1NfoVuhQ4p9mdveb26zFPBrwyTMXRCJUIAY7giqc3SLOWD80xHKE5sjka"
        )
        {
            var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456790";

            return deviceID
                .Split("-")
                .Skip(1)
                .SelectMany(part => part.ToCharArray())
                .Aggregate("", (acc, character) => acc + letters[versionID.IndexOf(character)]);
        }

        /// <summary>
        /// Generate a LunarCRUSH API URL with valid parameters.
        /// </summary>
        /// <param name="version">The LunarCRUSH version.</param>
        /// <param name="deviceID">The device identified, UUID format prefixed with "LDID-". Generates random if null.</param>
        /// <param name="versionID">The version identifier taken from LunarCRUSH website.</param>
        public static string GetURL(
            string version = "lunar-20211013",
            string deviceID = null,
            string versionID = "GtlZn1NfoVuhQ4p9mdveb26zFPBrwyTMXRCJUIAY7giqc3SLOWD80xHKE5sjka"
        )
        {
            var baseURL = "https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Firefox&";
            var deviceId = deviceID ?? ("LDID-" + Guid.NewGuid().ToString());

            var urlParams = new List<string> {
                "deviceId=" + deviceId,
                "validator=" + GetValidator(deviceId, versionID),
                "clientVersion=" + version
            };

            return baseURL + string.Join("&", urlParams);
        }

        /// <summary>
        /// Generate a LunarCRUSH API key.
        /// </summary>
        /// <param name="version">The LunarCRUSH version.</param>
        /// <param name="deviceID">The device identified, UUID format prefixed with "LDID-". Generates random if null.</param>
        /// <param name="versionID">The version identifier taken from LunarCRUSH website.</param>
        public static async Task<string> GetKey(
            string version = "lunar-20211013",
            string deviceID = null,
            string versionID = "GtlZn1NfoVuhQ4p9mdveb26zFPBrwyTMXRCJUIAY7giqc3SLOWD80xHKE5sjka"
        )
        {
            var url = GetURL(version, deviceID, versionID);

            HttpClient client = new HttpClient();
            var res = await client.GetAsync(url);

            if (res.StatusCode == HttpStatusCode.OK)
            {
                string jsonString = await res.Content.ReadAsStringAsync();
                Dictionary<string, JsonElement> dict = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(jsonString);
                return dict["token"].ToString();
            }

            return null;
        }
    }
}
