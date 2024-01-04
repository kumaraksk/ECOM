using Shopwell.Core.Service.DTOs.Email;
using System.Threading.Tasks;

namespace Shopwell.Core.Service.Interfaces
{
    public interface IEmailService
    {
        Task SendAsync(EmailRequest request);
    }
}
