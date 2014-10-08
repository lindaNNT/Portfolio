using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Net.Configuration;
using System.Web;
using System.Security.Cryptography;

namespace WebSite.Resource
{
    public class Settings
    {
        private string _myMail { get; set; }
        private string _myPass { get; set; }
        private string _mailSub { get; set; }
        private string _smtpServer { get; set; }

        public string GetMyMail()
        {
            _myMail = ConfigurationManager.AppSettings["MyMail"];
            return _myMail;
        }

        public string GetMyPass()
        {
            _myPass = ConfigurationManager.AppSettings["MyP"];
            return _myPass;
        }

        public string GetMailSubject()
        {
            _mailSub = ConfigurationManager.AppSettings["MailSubject"];
            return _mailSub;
        }

        public string GetSmtpServer()
        {
            _smtpServer = ConfigurationManager.AppSettings["smtpServer"];
            return _smtpServer;
        }
    }
}