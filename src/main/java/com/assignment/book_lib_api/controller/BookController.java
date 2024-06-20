package com.assignment.book_lib_api.controller;

import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.service.BookService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Book> getBooks( @RequestParam( name ="pageSize", defaultValue = "0" ) int pageSize, @RequestParam( name = "pageNo", defaultValue = "0") int pageNo ) {
        return this.bookService.getBooks( pageNo, pageSize );
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
}
