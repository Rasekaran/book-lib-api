package com.assignment.book_lib_api.controller;

import com.assignment.book_lib_api.model.Author;
import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
public class AuthorController {
    @Autowired
    protected AuthorService authorService;

    @GetMapping( "authors" )
    public List<Author> getAuthors() {
        return this.authorService.getAuthors();
    }

    @GetMapping( "author/{id}" )
    public Author getAuthor( @PathVariable( name = "id" ) int authorId ) {
        Author author = this.authorService.getAuthor( authorId );
        if( author != null ) {
            return author;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find Author");
    }

    @PostMapping("author")
    public Author addBook(@RequestBody Author author ) {
        return this.authorService.addAuthor( author );
    }
}
