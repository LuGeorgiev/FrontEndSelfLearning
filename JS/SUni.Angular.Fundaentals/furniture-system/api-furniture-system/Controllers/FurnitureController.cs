﻿using api_furniture_system.Models.Dto.Furniture;
using api_furniture_system.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_furniture_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FurnitureController : ControllerBase
    {
        private readonly IFurnitureService furnitureService;

        public FurnitureController(IFurnitureService furnitureService)
        {
            this.furnitureService = furnitureService;
        }

        [Authorize]
        [HttpPost("create")]
        public async Task<IActionResult> Create(FurnitureBindingModel model)
        {
            if (! ModelState.IsValid)
            {
                return BadRequest("Invalid furniture");
            }

            var email = this.User.Claims.FirstOrDefault(x => x.Type.Contains("emailaddress", StringComparison.InvariantCultureIgnoreCase));
            if (email == null)
            {
                return this.Unauthorized();
            }
            model.UserEmail = email.Value;

            var createdFurniture = await this.furnitureService.CreateAsync(model);

            if (createdFurniture == null)
            {
                return UnprocessableEntity();
            }

            return StatusCode(201, createdFurniture);
        }

        [HttpGet("all")]
        public async Task<IActionResult> All()
        {
            var allFurnitures = await this.furnitureService.AllAsync();                     

            return this.Ok(allFurnitures);
        }
        
        [HttpGet("details/{id}")]
        public async Task<IActionResult> Details(int id)
        {
            if (id <= 0)
            {
                return this.BadRequest();
            }

            var furniture = await this.furnitureService.GetByIdAsync(id);

            if (furniture == null)
            {
                return this.UnprocessableEntity();
            }

            return this.Ok(furniture);
        }

        [Authorize]
        [HttpGet("mine")]
        public async Task<IActionResult> Mine()
        {
            var email = this.User.Claims
                .FirstOrDefault(x => x.Type.Contains("emailaddress", StringComparison.InvariantCultureIgnoreCase));
            if (email == null)
            {
                return this.Unauthorized();
            }

            var furnitures = await this.furnitureService.GetMineAsync(email.Value);

            return this.Ok(furnitures);
        }

        [Authorize]
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return this.BadRequest("Invalid request");
            }

            var result = await this.furnitureService.DeleteAsync(id);

            return this.Ok(new { wasDeleted = result });
        }
    }
}
