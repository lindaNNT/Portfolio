using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebSite.Models
{
    public class Mail
    {
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Textlängden måste vara mellan 2-50 tecken.")]
        [RegularExpression(@"^(([A-Za-z]+[\s]{1}[A-Za-z]+)|([A-Za-z]+))$",
                            ErrorMessage = "Få ändast bestå av bokstäver samt enbart av för- och efternamn.")]
        [Required(ErrorMessage = "Namn måste fyllas i.")]
        public string Name { get; set; }

        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                            @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                            @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                            ErrorMessage = "Email är ogiltig.")]
        [Required(ErrorMessage = "Email måste fyllas i.")]
        public string MailAdress { get; set; }

        [StringLength(10000, MinimumLength = 2, ErrorMessage = "Textlängden måste vara minst två tecken")]
        [Required(ErrorMessage = "Meddelande måste fyllas i.")]
        public string Message { get; set; }
    }
}