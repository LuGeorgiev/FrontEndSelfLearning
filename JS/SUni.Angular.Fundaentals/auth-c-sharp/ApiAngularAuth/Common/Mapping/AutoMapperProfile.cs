using ApiAngularAuth.Models.Data;
using ApiAngularAuth.Models.View.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Common.Mapping
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<LoginDto, User>();
            CreateMap<RegisterDto, User>();


        }
    }
}
