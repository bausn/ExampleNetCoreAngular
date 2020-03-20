using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Repositories;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAll")]
    public class ServiceController : ControllerBase
    {
        private IServiceRepository _repository; 

        public ServiceController(IServiceRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Produces("application/json")]
        public async Task<IActionResult> GetData()
        {
            try {

                return Ok(await _repository.GetData());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}