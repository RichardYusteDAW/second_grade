package fpmislata.examen.c_domain._1usecase.admin.actor.impl;

import fpmislata.examen.a_common.annotation.UseCase;
import fpmislata.examen.c_domain._1usecase.admin.actor.interfaces.ActorCreateUseCase;
import fpmislata.examen.c_domain._2service.interfaces.ActorService;
import fpmislata.examen.c_domain._2service.model.Actor;
import lombok.RequiredArgsConstructor;

@UseCase
@RequiredArgsConstructor
public class ActorCreateUseCaseImpl implements ActorCreateUseCase {

    private final ActorService actorService;

    @Override
    public Actor execute(Actor actor) {
        return actorService.create(actor);
    }
}