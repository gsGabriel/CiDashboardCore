using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace CiDashboardCore.Web
{
    public class Program
    {
        private static readonly Dictionary<string, string> defaults = new Dictionary<string, string> 
        {
            { WebHostDefaults.EnvironmentKey, "Development" }
        };

        public static void Main(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(defaults)
                .AddEnvironmentVariables("ASPNETCORE_")
                .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(configuration)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();

            host.Run();
        }
    }
}
