using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactCandidates.data.Migrations
{
    public partial class nextone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RegistrationStatus",
                table: "Candidates",
                newName: "Status");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Candidates",
                newName: "RegistrationStatus");
        }
    }
}
