package com.assignment.book_lib_api.service;

import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.repository.BookRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Setter
    @Autowired
    protected BookRepository bookRepository;

    public Page<Book> getBooks( int pageNo, int pageSize ) {
        if( pageSize > 0 && pageNo >= 0 ) {
            return this.bookRepository.findAll(PageRequest.of(pageNo, pageSize, Sort.by("id")));
        }
        throw new RuntimeException( "Invalid page number or page size." );
    }

    public List<Book> getBooks() {
        return this.bookRepository.findAll( Sort.by("id") );
    }

    public Book getBook(int id) {
        Optional<Book> bookOptl = this.bookRepository.findById( "" + id );
        return bookOptl.orElse(null );
    }

    public Book addBook( Book book ) {
        return this.bookRepository.saveAndFlush( book );
    }

    public void updateBook( Book book ) {
        this.bookRepository.updateBook( book.getId(), book.getName(), book.getIsbn(), book.getAuthor().getId() );
    }
}
