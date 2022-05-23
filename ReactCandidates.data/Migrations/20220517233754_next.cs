using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactCandidates.data.Migrations
{
    public partial class next : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "registrationStatus",
                table: "Candidates",
                newName: "RegistrationStatus");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RegistrationStatus",
                table: "Candidates",
                newName: "registrationStatus");
        }
    }
}
