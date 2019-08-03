using ApiAngularAuth.Models.Data;
using ApiAngularAuth.Models.View.Book;
using ApiAngularAuth.Models.View.User;
using AutoMapper;
using System.Text;

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

            CreateMap<Book, BookDto>();
        }
    }
}
