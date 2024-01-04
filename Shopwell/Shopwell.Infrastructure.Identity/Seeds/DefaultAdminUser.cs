using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Shopwell.Infrastructure.Identity.Models;

namespace Shopwell.Infrastructure.Identity.Seeds
{
    public static class DefaultAdminUser
    {
        public static void SeedUsers(ModelBuilder builder)
        {
            ApplicationUser user = new ApplicationUser()
            {
                Id = "b74ddd14-6340-4840-95c2-db12554843e5",
                UserName = "admin@gmail.com",
                Email = "admin@gmail.com",
                NormalizedEmail = "admin@gmail.com".ToUpper(),
                NormalizedUserName = "admin@gmail.com".ToUpper(),
                FirstName = "Kumar",
                LastName = "K S",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };

            PasswordHasher<ApplicationUser> passwordHasher = new PasswordHasher<ApplicationUser>();
            user.PasswordHash = passwordHasher.HashPassword(user, "Admin*123");
            builder.Entity<ApplicationUser>().HasData(user);
        }

    }
}
