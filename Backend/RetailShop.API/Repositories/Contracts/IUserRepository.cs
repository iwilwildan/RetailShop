using RetailShop.API.Entities;
using RetailShop.Models.Dtos;

namespace RetailShop.API.Repositories.Contracts
{
    public interface IUserRepository
    {
        Task<User> SignUp(UserDto user);
        Task<User> SignIn(UserDto user);
    }
}
