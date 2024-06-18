package com.assignment.book_lib_api.service;

import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.repository.BookRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Setter
    @Autowired
    protected BookRepository bookRepository;

    public List<Book> getBooks( int pageNo, int pageSize ) {
        if( pageSize > 0 && pageNo >= 0 ) {
            return this.bookRepository.findAll(PageRequest.of(pageNo, pageSize, Sort.by("id"))).toList();
        }
        return this.bookRepository.findAll( Sort.by("id") );
    }

}
