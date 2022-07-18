package co.com.sofka.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;


@Configuration
public class RouterRest {
@Bean
public RouterFunction<ServerResponse> routerFunction(Handler handler) {
    return route(POST("/api/usecase/crearheroe"), handler::createHeroUseCase)// Listo
            .and(route(GET("/api/usecase"), handler::listAllUseCase)) // Listo
            .and(route(GET("/api/usecase/{id}"), handler::listForIdUseCase)) // Listo
            .and(route(PUT("/api/usecase/{id}"), handler::updateForHero))// Listo
            .and(route(DELETE("/api/usecase/{id}"), handler::deleteHero)); // Listo

    }
}
