using ApiAngularAuth.Models.Data;
using ApiAngularAuth.Models.View.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiAngularAuth.Common.Mapping
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginDto, User>()
                .ForMember(x =>x.Password, opt => opt.MapFrom(x=>Encoding.UTF8.GetBytes(x.Password)));
            CreateMap<RegisterDto, User>()
                .ForMember(x => x.Password, opt => opt.MapFrom(x => Encoding.UTF8.GetBytes(x.Password)));
        }
    }
}
