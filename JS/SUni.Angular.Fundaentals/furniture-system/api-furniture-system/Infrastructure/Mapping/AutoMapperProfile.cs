using api_furniture_system.Models.Data;
using api_furniture_system.Models.Dto.Furniture;
using api_furniture_system.Models.Dto.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api_furniture_system.Infrastructure.Mapping
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginModel, User>()
                .ForMember(x => x.Password, opt => opt.MapFrom(x => Encoding.UTF8.GetBytes(x.Password)));
            CreateMap<RegisterModel, User>()
                .ForMember(x => x.Password, opt => opt.MapFrom(x => Encoding.UTF8.GetBytes(x.Password)));

            CreateMap<FurnitureBindingModel, Furniture>();
            CreateMap<Furniture, FurnitureViewModel>();
        }
    }
}
