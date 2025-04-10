package com.fpmislata.demo.c_domain.repository;

import java.util.List;
import java.util.Optional;

import com.fpmislata.demo.c_domain.model.Book;
import com.fpmislata.demo.c_domain.model.ListWithCount;

public interface BookRepository {

    List<Book> findAll();

    ListWithCount<Book> findAll(Integer page, Integer size);

    Optional<Book> findById(Integer id);

    Optional<Book> findByIsbn(String isbn);

    void save(Book book);

    void delete(Integer id);
}