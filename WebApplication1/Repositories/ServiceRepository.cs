using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Configurations;

namespace WebApplication1.Repositories
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly ConnectionString connectionString;

        public ServiceRepository(IOptions<ConnectionString> options)
        {
            this.connectionString = options.Value;
        }

        public async Task<string[]> GetData()
        {
            return new string[]{ "uno", "dos", "tres", "cuatro"};
        }
    }
}
