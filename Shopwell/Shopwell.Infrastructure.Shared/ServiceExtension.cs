using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Shopwell.Core.Service.Interfaces;
using Shopwell.Core.Service.Settings;
using Shopwell.Infrastructure.Shared.Services;

namespace Shopwell.Infrastructure.Shared
{
    public static class ServiceExtension
    {
        public static void AddSharedInfrastructure(this IServiceCollection services, IConfiguration _config)
        {
            services.Configure<MailSettings>(_config.GetSection("MailSettings"));
            services.AddTransient<IEmailService, EmailService>();
        }
    }
}
