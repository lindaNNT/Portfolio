﻿using System.Web;
using System.Web.Optimization;

namespace WebSite
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include( 
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                      "~/Scripts/knockout-3.2.0.js",
                      "~/Scripts/knockout.binding-conventions-1.0.61.0.js",
                      "~/Scripts/knockout.bootstrap-1.0.7.0.js",
                      "~/Scripts/knockout-3.2.0.debug.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/jquery-ui-1.11.1.js",
                      "~/Scripts/jquery-ui.min-1.11.1.js",
                      "~/Scripts/app/Header.js",
                      "~/Scripts/app/About.js",
                      "~/Scripts/app/Leisure.js",
                      "~/Scripts/app/Contact.js",
                      "~/Scripts/app/Common.js",
                      "~/Scripts/app/Footer.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/header.scss",
                      "~/Content/experience.css",
                      "~/Content/education.css",
                      "~/Content/popups.css",
                      "~/Content/about.scss",
                      "~/Content/leisure.css",
                      "~/Content/intrests.css",
                      "~/Content/family.css",
                      "~/Content/contact.css",
                      "~/Content/email.css",
                      "~/Content/footer.css",
                      "~/Content/Common.css",
                      "~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
        }
    }
}
