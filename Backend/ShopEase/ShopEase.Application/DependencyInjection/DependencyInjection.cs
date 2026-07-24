using Microsoft.Extensions.DependencyInjection;

namespace ShopEase.Application.DependencyInjection;

//A static class holds extension methods
public static class DependencyInjection
{
    //The keyword this turns the method into an extension method
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {
        // Register Application Services Here

        return services;
    }
}