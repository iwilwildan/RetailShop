using Microsoft.EntityFrameworkCore;
using RetailShop.API.Data;
using RetailShop.API.Entities;
using RetailShop.API.Repositories.Contracts;
using RetailShop.Models.Dtos;

namespace RetailShop.API.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly RetailShopDbContext _db;

        public ProductRepository(RetailShopDbContext db)
        {
            _db = db;
        }

        public async Task<Product> AddItem(ProductDto product)
        {
            var itemToAdd = new Product();
            itemToAdd.Name = product.Name;
            itemToAdd.Description = product.Description;
            itemToAdd.Price = product.Price;
            itemToAdd.CategoryId = product.CategoryId;
            itemToAdd.ImageURL = product.ImageURL;
            itemToAdd.Qty = product.Qty;

            var newProduct = await _db.Products.AddAsync(itemToAdd);

            await _db.SaveChangesAsync();

            return itemToAdd;
        }

        public async Task<IEnumerable<ProductCategory>> GetCategories()
        {
            return await _db.ProductCategories.ToListAsync();
        }

        public async Task<ProductCategory> GetCategory(int id)
        {
            var result =await _db.ProductCategories.FindAsync(id);
            return result;
        }

        public async Task<Product> GetItem(int id)
        {
            return await _db.Products.FindAsync(id);
        }

        public async Task<IEnumerable<Product>> GetItems()
        {
            return await _db.Products.ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetItemsByCategory(int categoryId)
        {
            return await _db.Products.Where(x => x.CategoryId == categoryId).ToListAsync();
        }
    }
}
