using Microsoft.AspNet.Identity;
using Microsoft.EntityFrameworkCore;
using RetailShop.API.Data;
using RetailShop.API.Entities;
using RetailShop.API.Repositories.Contracts;
using RetailShop.Models.Dtos;

namespace RetailShop.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly RetailShopDbContext _db;
        private readonly IPasswordHasher _passwordHasher;
        public UserRepository(RetailShopDbContext db, IPasswordHasher passwordHasher)
        {
            _db = db;
            _passwordHasher = passwordHasher;
        }

        private async Task<bool> IsUserExists(string username)
        {
            return await _db.Users.AnyAsync(x => x.UserName == username);
        }
        
        public async Task<User> SignUp(UserDto user)
        {
            if (await IsUserExists(user.UserName))
            {
                throw new Exception($"User with username: {user.UserName} already exists");
            }
            var userToAdd = new User();
            userToAdd.Email = user.Email;
            userToAdd.UserName = user.UserName;

            //hashing password
            userToAdd.Password = _passwordHasher.HashPassword(user.Password);

            var newUser = await _db.Users.AddAsync(userToAdd);

            await _db.SaveChangesAsync();

            return userToAdd;
        }

        public async Task<User> SignIn(UserDto user)
        {
            var dbUser = await _db.Users.FirstOrDefaultAsync(x => x.UserName == user.UserName);
            if (dbUser == null)
            {
                throw new Exception($"User with username: {user.UserName} is not exists");
            }

            //var verify = _passwordHasher.VerifyHashedPassword(dbUser.Password, user.Password);
            //if (verify == PasswordVerificationResult.Failed)
            if(dbUser.Password != user.Password)
            {
                throw new Exception($"Invalid credential");
            }

            return dbUser;
        }
    }
}
