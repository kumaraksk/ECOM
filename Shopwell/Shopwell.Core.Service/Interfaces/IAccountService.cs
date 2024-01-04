using Shopwell.Core.Service.DTOs.Account;
using Shopwell.Core.Service.Wrappers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shopwell.Core.Service.Interfaces
{
    public interface IAccountService
    {
        Task<Response<AuthenticationResponse>> AuthenticateAsync(AuthenticationRequest request, string ipAddress);
        Task<Response<string>> RegisterAsync(RegisterRequest request, string origin);
        Task<Response<string>> ConfirmEmailAsync(string userId, string code);
        Task ForgotPassword(ForgotPasswordRequest model, string origin);
        Task<Response<string>> ResetPassword(ResetPasswordRequest model);
        Task<Response<string>> ResendEmail(string email, string origin);
        Response<List<string>> GetUserNames();
        Task<Response<string>> DeleteUser(string email);
    }
}
