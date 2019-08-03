using ApiAngularAuth.Data;
using ApiAngularAuth.Models.View.Book;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAngularAuth.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookStoreContext db;
        private readonly IMapper mapper;

        public BookController(BookStoreContext db, IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var data = await db.Books.ToListAsync();
            var result = this.mapper.Map<IEnumerable<BookDto>>(data);

            return this.Ok(result);
        }

    }
}
