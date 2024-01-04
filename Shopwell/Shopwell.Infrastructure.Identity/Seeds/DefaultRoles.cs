using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Shopwell.Infrastructure.Identity.Seeds
{
    public static class DefaultRoles
    {
        public static void SeedRoles(ModelBuilder builder)
        {

            builder.Entity<IdentityRole>().HasData(
                new IdentityRole() { Id = "fab4fac1-c546-41de-aebc-a14da6895711", Name = Enums.UserRoles.Admin.ToString(), ConcurrencyStamp = "1", NormalizedName = Enums.UserRoles.Admin.ToString() },
                new IdentityRole() { Id = "c7b013f0-5201-4317-abd8-c211f91b7330", Name = Enums.UserRoles.User.ToString(), ConcurrencyStamp = "2", NormalizedName = Enums.UserRoles.User.ToString() }
                );
            SeedUserRoles(builder);
        }

        private static void SeedUserRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>() { RoleId = "fab4fac1-c546-41de-aebc-a14da6895711", UserId = "b74ddd14-6340-4840-95c2-db12554843e5" }
                );
        }
    }
}
