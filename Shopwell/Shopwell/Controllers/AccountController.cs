using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopwell.Core.Service.DTOs.Account;
using Shopwell.Core.Service.Interfaces;

namespace Shopwell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAsync(AuthenticationRequest request)
        {
            return Ok(await _accountService.AuthenticateAsync(request, GenerateIPAddress()));
        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(RegisterRequest request)
        {
            var origin = Request.Headers["origin"];
            return Ok(await _accountService.RegisterAsync(request, origin));
        }
        [HttpGet("confirm-email")]
        public async Task<IActionResult> ConfirmEmailAsync([FromQuery] string userId, [FromQuery] string code)
        {
            var origin = Request.Headers["origin"];
            return Ok(await _accountService.ConfirmEmailAsync(userId, code));
        }
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordRequest model)
        {
            await _accountService.ForgotPassword(model, Request.Headers["origin"]);
            return Ok();
        }
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequest model)
        {

            return Ok(await _accountService.ResetPassword(model));
        }
        [HttpPost("resend-email")]
        public async Task<IActionResult> ResendEmailAsync(string email)
        {
            var origin = Request.Headers["origin"];
            return Ok(await _accountService.ResendEmail(email, origin));
        }

        [HttpGet("usernames")]
        public IActionResult GetUserNames()
        {
            return Ok(_accountService.GetUserNames());
        }

        [HttpDelete("delete")]
        public IActionResult DeleteUser(string email)
        {
            return Ok(_accountService.DeleteUser(email));
        }

        [HttpGet("users"), Authorize]
        public IActionResult GetUsers()
        {
            return Ok(_accountService.GetUserNames());
        }

        private string GenerateIPAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];
            else
                return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
        }
    }
}