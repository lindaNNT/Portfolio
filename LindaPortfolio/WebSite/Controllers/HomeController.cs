using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using WebSite.Models;
using WebSite.Resource;
using System.Web.UI.WebControls;

namespace WebSite.Controllers
{
    public class HomeController : Controller
    {
        private Settings set = new Settings();

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Respond = "";
            return View();
        }

        [HttpPost]
        public ActionResult Index(FormCollection formColl)
        {
            var name= formColl["Name"];
            var email = formColl["MailAdress"];
            var message = formColl["Message"];
            if(name != null && email !=null && message != null)
            {
                var respond = sendMail(name, email, message);
                var a = formColl["Name"];
                ViewBag.Respond = respond;
            }
            else
            {
                ViewBag.Respond = "blank";
            }
            formColl.Clear();
            return View();
        }

        private string sendMail(string name, string email, string message)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.live.com");

                mail.From = new MailAddress(email);
                mail.To.Add(set.GetMyMail());
                mail.Subject = "Linda Portfolio e-mail";
                mail.IsBodyHtml = true;
                mail.Body = "<hr /><b>Name:  </b>" + name
                        + "<br/><b>Från Email: </b>" + email
                        + "<br />______________________________________<br /> <b>Meddelande:</b><br />" + message;

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential(set.GetMyMail(), set.GetMyPass());
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                return "Tack för ditt meddelande! Jag återkommer så fort jag kan.";
            }
            catch(Exception e)
            {
                return "Något gick fel, meddelandet skickades inte, va vänlig och skicka igen.";
                throw e;            }
        }
    }
}