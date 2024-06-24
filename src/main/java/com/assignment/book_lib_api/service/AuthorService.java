package com.assignment.book_lib_api.service;

import com.assignment.book_lib_api.model.Author;
import com.assignment.book_lib_api.repository.AuthorRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Setter
    @Autowired
    protected AuthorRepository authorRepository;

    public List<Author> getAuthors() {
        return this.authorRepository.findAll( Sort.by( "id" ));
    }

    public Author getAuthor( int id ) {
        Optional<Author> authorOptl = this.authorRepository.findById( "" + id );
        return authorOptl.orElse(null );
    }

    public Author addAuthor( Author author ) {
        return this.authorRepository.saveAndFlush( author );
    }

    public void updateAuthor( Author author ) {
        this.authorRepository.updateAuthor( author.getId(), author.getFirstName(), author.getLastName() );
    }
}
