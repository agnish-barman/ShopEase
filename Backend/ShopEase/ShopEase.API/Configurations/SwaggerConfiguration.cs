using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi;

namespace ShopEase.Api.Configurations;

public static class SwaggerConfiguration
{
    public static IServiceCollection AddSwaggerConfiguration(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();

        services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "ShopEase API",
                Version = "v1",
                Description = "REST API for the ShopEase E-Commerce Application"
            });
        });

        return services;
    }
}