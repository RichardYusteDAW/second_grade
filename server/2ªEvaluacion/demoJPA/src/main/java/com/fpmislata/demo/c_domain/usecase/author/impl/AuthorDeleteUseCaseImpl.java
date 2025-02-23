package com.fpmislata.demo.c_domain.usecase.author.impl;

import com.fpmislata.demo.a_common.annotation.UseCase;
import com.fpmislata.demo.a_common.exception.ResourceNotFoundException;
import com.fpmislata.demo.c_domain.service.interfaces.AuthorService;
import com.fpmislata.demo.c_domain.usecase.author.interfaces.AuthorDeleteUseCase;

import lombok.RequiredArgsConstructor;

@UseCase
@RequiredArgsConstructor
public class AuthorDeleteUseCaseImpl implements AuthorDeleteUseCase {

    private final AuthorService authorService;

    @Override
    public void execute(Integer idAuthor) {
        authorService
                .findById(idAuthor)
                .orElseThrow(() -> new ResourceNotFoundException("Author not found"));
        authorService.delete(idAuthor);
    }
}