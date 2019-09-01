using api_furniture_system.Models.Dto.Furniture;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_furniture_system.Services
{
    public interface IFurnitureService
    {
        Task<FurnitureViewModel> CreateAsync(FurnitureBindingModel model);

        Task<IEnumerable<FurnitureViewModel>> AllAsync();

        Task<FurnitureViewModel> GetByIdAsync(int furnitureId);

        Task<IEnumerable<FurnitureViewModel>> GetMineAsync(string userEmail);

        Task<bool> DeleteAsync(int furnitureId);
    }
}
