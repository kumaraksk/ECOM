using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Shopwell.Infrastructure.Identity.Models;
using Shopwell.Infrastructure.Identity.Enums;
using Shopwell.Infrastructure.Identity.Seeds;

namespace Shopwell.Infrastructure.Identity
{
    public class IdentityContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    {
        public IdentityContext
           (DbContextOptions<IdentityContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            DefaultRoles.SeedRoles(builder);
            DefaultAdminUser.SeedUsers(builder);
        }
    }
}
