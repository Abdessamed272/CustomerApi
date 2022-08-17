using CustomerApi.Model;
using Microsoft.EntityFrameworkCore;

namespace CustomerApi.Data;

public class CustomerDbContext : DbContext
{
    public enum CustomerCategory
    {
        nouveau, rare, fréquent, ancien
    }


    public CustomerDbContext(DbContextOptions<CustomerDbContext> options)
            : base(options)
    {
    }
    public DbSet<Customer>? Customers { get; set; }
}