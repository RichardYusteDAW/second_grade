package com.fpmislata.demo.d_persistence.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.fpmislata.demo.c_domain.model.Book;
import com.fpmislata.demo.c_domain.repository.BookRepository;
import com.fpmislata.demo.d_persistence.zdao.interfaces.BookDao;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class BookRepositoryImpl implements BookRepository {

    private final BookDao bookDao;

    @Override
    public List<Book> findAll() {
        return bookDao.findAll();
    }

    @Override
    public Optional<Book> findById(Integer id) {
        return bookDao.findById(id);
    }

    @Override
    public Optional<Book> findByIsbn(String isbn) {
        return bookDao.findByIsbn(isbn);
    }

    @Override
    public void save(Book book) {
        bookDao.save(book);
    }

    @Override
    public void delete(Integer id) {
        bookDao.delete(id);
    }
}