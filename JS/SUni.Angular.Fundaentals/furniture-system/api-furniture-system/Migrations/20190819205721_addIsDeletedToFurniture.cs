using Microsoft.EntityFrameworkCore.Migrations;

namespace api_furniture_system.Migrations
{
    public partial class addIsDeletedToFurniture : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Furnitures",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Furnitures");
        }
    }
}
