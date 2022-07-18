package co.com.sofka.api;

import co.com.sofka.model.hero.Hero;
import co.com.sofka.model.hero.gateways.HeroRepository;
import co.com.sofka.usecase.createhero.CreateHeroUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class Handler {
private  final HeroRepository heroRepository;
private  final CreateHeroUseCase createHeroUseCase;
    public Mono<ServerResponse> createHeroUseCase(ServerRequest serverRequest) {
        return serverRequest.bodyToMono(Hero.class)
                .flatMap(element -> createHeroUseCase.createHero(element))
                .flatMap(element -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(heroRepository.save(element), Hero.class));
    }

    public Mono<ServerResponse> listAllUseCase(ServerRequest serverRequest){
        return ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(heroRepository.findAll(), Hero.class);
    }

    public Mono<ServerResponse> listForIdUseCase(ServerRequest serverRequest){
        var id = serverRequest.pathVariable("id");

        return ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(heroRepository.findById(id), Hero.class);
    }

    public Mono<ServerResponse> updateForHero(ServerRequest serverRequest){
        var id = serverRequest.pathVariable("id");

        return serverRequest.bodyToMono(Hero.class)
                .flatMap(element -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(heroRepository.update(id, element), Hero.class));
    }

    public Mono<ServerResponse> deleteHero(ServerRequest serverRequest){
        var id = serverRequest.pathVariable("id");

        return ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(heroRepository.delete(id), Hero.class);
    }
}
