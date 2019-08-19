using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_furniture_system.Data;
using api_furniture_system.Models.Data;
using api_furniture_system.Models.Dto.Furniture;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace api_furniture_system.Services.Implementations
{
    public class FurnitureService : IFurnitureService
    {
        private readonly FurnitureContext db;
        private readonly IMapper mapper;

        public FurnitureService(FurnitureContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<FurnitureViewModel>> AllAsync()
        {
            var allFurnitures = await this.db.Furnitures
                .Where(x => x.IsDeleted == false)
                .ToListAsync();
            var result = this.mapper.Map<IEnumerable<FurnitureViewModel>>(allFurnitures);
            return result;
        }

        public async Task<FurnitureViewModel> CreateAsync(FurnitureBindingModel model)
        {
            //TODO refactor in separate class
            var user = await this.db.Users
                .FirstOrDefaultAsync(x => x.Email == model.UserEmail);
            if (user == null)
            {
                return null;
            }

            var furniture = this.mapper.Map<Furniture>(model);
            furniture.UserId = user.Id;

            await this.db.Furnitures.AddAsync(furniture);
            await this.db.SaveChangesAsync();

            return this.mapper.Map<FurnitureViewModel>(furniture);
        }

        public async Task<bool> DeleteAsync(int furnitureId)
        {
            var furniture = await this.db.Furnitures
                .FirstOrDefaultAsync(x => x.Id == furnitureId);

            if (furniture == null)
            {
                return false;
            }

            furniture.IsDeleted = true;
            try
            {
                this.db.Furnitures.Update(furniture);
                await this.db.SaveChangesAsync();
            }
            catch 
            {
                return false;
            }

            return true;
        }

        public async Task<FurnitureViewModel> GetByIdAsync(int furnitureId)
        => this.mapper
            .Map<FurnitureViewModel>(await this.db.Furnitures
                                            .FirstOrDefaultAsync(x => x.Id == furnitureId));

        public async Task<IEnumerable<FurnitureViewModel>> GetMineAsync(int userId)
        => this.mapper
            .Map<IEnumerable<FurnitureViewModel>>(await this.db.Furnitures
                                                            .Where(x => x.UserId == userId)
                                                            .ToListAsync());
    }
}
