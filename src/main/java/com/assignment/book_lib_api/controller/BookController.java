package com.assignment.book_lib_api.controller;

import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.service.BookService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    @Setter
    protected BookService bookService;

    @GetMapping("/")
    public String root() {
        return "Success";
    }

    @GetMapping("books")
    @CrossOrigin(origins = "*", exposedHeaders = { "X-Total-Count", "X-Total-Pages" })
    public List<Book> getBooks( @RequestParam( name ="pageSize", defaultValue = "0" ) int pageSize, @RequestParam( name = "pageNo", defaultValue = "0") int pageNo, HttpServletResponse response ) {
        List<Book> books;
        if( pageSize > 0 && pageNo >= 0 ) {
            Page<Book> booksPage = this.bookService.getBooks( pageNo, pageSize );
            response.addHeader( "X-Total-Pages", booksPage.getTotalPages() + "" );
            response.addHeader( "X-Total-Count", booksPage.getTotalElements() + "" );
            books = booksPage.toList();
        } else {
            books = this.bookService.getBooks();
            response.addHeader( "X-Total-Pages", "1" );
            response.addHeader( "X-Total-Count", books.size() + "" );
        }
        return books;
    }

    @GetMapping("book/{id}")
    public Book getBook(@PathVariable( name ="id" ) int id ) {
        Book book = this.bookService.getBook( id );
        if( book != null ) {
            return book;
        }
        throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Unable to find book");
    }

    @PostMapping("book")
    public Book addBook( @RequestBody Book book ) {
        return this.bookService.addBook( book );
    }

    @PutMapping("book/{id}")
    public void updateBook( @PathVariable( name ="id" ) int id, @RequestBody Book book ) {
        this.bookService.updateBook( book );
    }
}
