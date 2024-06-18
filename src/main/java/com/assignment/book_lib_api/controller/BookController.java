package com.assignment.book_lib_api.controller;

import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.service.BookService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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

}
