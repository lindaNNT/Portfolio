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
        private string _myMail;
        private string _myPass;
        private string _mailSub;
        private string _smtpServer;

        public Settings() 
        {
            SetMyMail();
            SetMyPass();
            SetMailSubject();
            SetSmtpServer();

        }

        public string GetMyMail()
        {
            var myMail = _myMail;
            return myMail;
        }

        private void SetMyMail()
        {
           _myMail = "lindalieunguyen@outlook.com";
        }

        public string GetMyPass()
        {
            var myPass = _myPass;
            return myPass;
        }

        private void SetMyPass()
        {
            _myPass = "Work88Mail";
        }

        public string GetMailSubject()
        {
            var mailSub = _mailSub;
            return mailSub;
        }

        private void SetMailSubject()
        {
            _mailSub = "Linda Portfolio e-mail";
        }

        public string GetSmtpServer()
        {
            var smtpServer = _smtpServer;
            return _smtpServer;
        }

        private void SetSmtpServer()
        {
            _smtpServer = "smtp.live.com";
        }
    }
}