using CustomerApi.Data;
using CustomerApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace CustomerApi.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDbContext _dbContext;

        public CustomerController(CustomerDbContext context)
        {
            _dbContext = context;
        }

        //[Route("GetAllCustomer")]
        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetAllCustomer()
        {

            return _dbContext.Customers.ToList();
        }
        //[Route("GetCustomer")]
        [HttpGet("{Id}")]
        public ActionResult GetCustomer(int Id)
        {
                var customer = _dbContext.Customers.Where(x => x.Id == Id).SingleOrDefault();
            if (customer == null)
            {
                return StatusCode(404, "Customer not found ");
            }
            else
            {
                return Ok(customer);
            }
        }

        //[Route("CreateCustomer")]

        [HttpPost]
        public ActionResult CreateCustomer([FromBody] Customer customer)
        {
            customer.Id = new int();
            _dbContext.Add(customer);
            _dbContext.SaveChanges();
            return Ok(customer);

        }

        //[Route("UpdateCustomer")]

        [HttpPut]
        public async Task<ActionResult> UpdateCustomer(int id, [FromBody] Customer _customer)
        {
            Customer customer = await _dbContext.Customers.FindAsync(id);
            if(customer == null)
            {
                return StatusCode(204, "Id not found ");
            }else
            {
            customer.Name = _customer.Name;
            customer.PhoneNumber = _customer.PhoneNumber;
            customer.Category = _customer.Category;

                _dbContext.Update(customer);
            _dbContext.SaveChanges();
            return Ok(customer);
            }

        }

        //[Route("DeleteCustomer")]
        [HttpDelete("{Id}")]
        public async Task<ActionResult> DeleteCustomer(int Id)
        {
            Customer customer = await _dbContext.Customers.FindAsync(Id);
            if (customer == null)
            {
                return StatusCode(204, "Id not found ");
            }
            else
            {
            _dbContext.Remove(customer);
            _dbContext.SaveChanges();
            return StatusCode(200, "Customer was deleted ");
            }
        }
    }
}
