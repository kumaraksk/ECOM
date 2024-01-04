using Microsoft.EntityFrameworkCore.Migrations;

namespace Shopwell.Infrastructure.Identity.Migrations
{
    public partial class PasswordHashAddedForAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "8ff09e91-e18a-41db-ae45-29ecdcde6cda", "AQAAAAEAACcQAAAAEHuZemflhe1XKx6dg8o8oMsIrqyGMcwYKIzf2ldGoKqqt9PSVw+6EWiZhYiL+UvGCg==", "2fd2d43f-6809-494b-b00a-a7533f713cd9" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "b74ddd14-6340-4840-95c2-db12554843e5",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7f4090b7-4d81-4a58-8600-e414c034505f", null, "9c2a7278-4f2a-4b60-8f05-f9b644550d97" });
        }
    }
}
