﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace CiDashboardCore.Web
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //Since UseWebpackDevMiddleware needs to know which incoming requests to intercept, 
                //make sure you've specified a publicPath value on your output
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                   HotModuleReplacement = true,
                   ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                //Since the default server- side MVC route goes next, any requests that match existing controller / action pairs will be handled by invoking that action.
                //Then, since MapSpaFallbackRoute is last, any other requests that don't appear to be for static files will be served by invoking the Index action on HomeController. 
                //This action's view should serve your client-side application code, allowing the client-side routing system to handle whatever URL has been requested.
                routes.MapSpaFallbackRoute(
                   name: "spa-fallback",
                   defaults: new { controller = "Home", action = "Index" });

                //for more information
                //https://github.com/aspnet/JavaScriptServices/tree/dev/src/Microsoft.AspNetCore.SpaServices
            });
        }
    }
}
