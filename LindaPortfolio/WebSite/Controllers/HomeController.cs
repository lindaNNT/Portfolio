using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using Microsoft.Ajax.Utilities;
using WebSite.Models;
using WebSite.Resource;
using System.Web.UI.WebControls;

namespace WebSite.Controllers
{
    public class HomeController : Controller
    {
        private readonly Settings _set = new Settings();
        private static string _name;
        private static string _email;
        private static string _message;

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Respond = "";
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Index(FormCollection formColl)
        {
            
            try
            {
                var name = formColl["Name"];
                var email = formColl["MailAdress"];
                var message = formColl["Message"];

                if (name != null && !name.Equals(string.Empty) &&
                    email != null && !email.Equals(string.Empty) &&
                    message != null && !message.Equals(string.Empty))
                {
                    if (_name != null && !_name.Equals(string.Empty) &&
                        _email != null && !_email.Equals(string.Empty) &&
                        _message != null && !_message.Equals(string.Empty))
                    {
                        if (_name == name && _email == email && _message == message)
                        {
                            ViewBag.Respond = "blank";
                        }
                        else
                        {
                            _name = name;
                            _email = email;
                            _message = message;

                            var respond = SendMail(name, email, message);
                            ViewBag.Respond = respond;
                        }
                    }
                    else
                    {
                        _name = name;
                        _email = email;
                        _message = message;

                        var respond = SendMail(name, email, message);
                        ViewBag.Respond = respond;
                    }
                }
                else
                {
                    ViewBag.Respond = "Alla fält måste vara ifyllda!";
                }
                return View();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        private string SendMail(string name, string email, string message)
        {
            try
            {
                var mail = new MailMessage {IsBodyHtml = true};
                var smtpServer = new SmtpClient(_set.GetSmtpServer());

                mail.From = new MailAddress(email);
                mail.To.Add(_set.GetMyMail());
                mail.Subject = _set.GetMailSubject();
                mail.Body = "<hr /><b>Name:  </b>" + name
                        + "<br/><b>Från Email: </b>" + email
                        + "<br />______________________________________<br /> <b>Meddelande:</b><br />" + message;

                smtpServer.Port = 587;
                smtpServer.Credentials = new System.Net.NetworkCredential(_set.GetMyMail(), _set.GetMyPass());
                smtpServer.EnableSsl = true;

                smtpServer.Send(mail);
                return "Tack för ditt meddelande! Jag återkommer så fort jag kan.";
            }
            catch(Exception e)
            {
                return "Något gick fel, meddelandet skickades inte, va vänlig och skicka igen.";
            }
        }
    }
}