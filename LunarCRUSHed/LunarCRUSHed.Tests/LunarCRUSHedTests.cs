using System;
using Xunit;
using LunarCRUSHed;

namespace LunarCRUSHed.Tests
{
    public class LunarCRUSHedTests
    {
        [Fact]
        public void TestGetValidator()
        {
            string deviceID = "LDID-b877b7c9-cfa0-4087-bd51-3e5c7ec0763f";
            string expectedValidator = "uZOOuOSpSh00n0ZOur5fTt5SOtS0OwTh";

            string validator = LunarCRUSHed.GetValidator(deviceID);

            Assert.Equal(validator, expectedValidator);
        }

        [Fact]
        public void TestGetURL()
        {
            string deviceID = "LDID-b877b7c9-cfa0-4087-bd51-3e5c7ec0763f";
            string expectedURL = "https://api.lunarcrush.com/v2?requestAccess=lunar&platform=web&device=Firefox&deviceId=LDID-b877b7c9-cfa0-4087-bd51-3e5c7ec0763f&validator=uZOOuOSpSh00n0ZOur5fTt5SOtS0OwTh&clientVersion=lunar-20211013";

            string url = LunarCRUSHed.GetURL(deviceID: deviceID);

            Assert.Equal(url, expectedURL);
        }

        [Fact]
        public async void TestGetKey()
        {
            string token = await LunarCRUSHed.GetKey();

            Assert.NotNull(token);
        }
    }
}
