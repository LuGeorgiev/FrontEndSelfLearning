using ApiAngularAuth.Data;
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

        public BookController(BookStoreContext db)
        {
            this.db = db;
        }

        [HttpGet]
        private async Task<IActionResult> GetBooks()
        {
            var data = await db.Books.ToListAsync();

            return this.Ok(data);
        }

    }
}
