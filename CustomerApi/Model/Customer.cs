using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using static CustomerApi.Data.CustomerDbContext;

namespace CustomerApi.Model
{
    public class Customer
    {

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [DisplayName("Phone Number")]
        [RegularExpression(@"(\+33)\d{9}")]
        public string PhoneNumber { get; set; }

        public CustomerCategory? Category { get; set; }
    }
}
