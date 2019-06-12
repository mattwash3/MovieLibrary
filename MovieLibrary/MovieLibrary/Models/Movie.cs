using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieLibrary.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Title")]
        public string Title { get; set; }
        [Display(Name = "Genre")]
        public string Genre { get; set; }
        [Display(Name = "Director Name")]
        public string DirectorName { get; set; }
        [Display(Name = "Movie Image")]
        public string MovieImage { get; set; }
    }
}