using Microsoft.Extensions.DependencyInjection;
using Shopwell.Core.Service.Interfaces;
using Shopwell.Infrastructure.Shared.Services;
using Microsoft.Extensions.Configuration;

namespace Shopwell.Infrastructure.Shared
{
    public static class ServiceExtension
    {
        public static void AddSharedInfrastructure(this IServiceCollection services, IConfiguration _config)
        {
            /// services.Configure<MailSettings>(_config.GetSection("MailSettings"));
            services.AddTransient<IEmailService, EmailService>();
        }
    }
}
