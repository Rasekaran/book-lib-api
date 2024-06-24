package com.assignment.book_lib_api.repository;

import com.assignment.book_lib_api.model.Book;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookRepository  extends JpaRepository<Book, String> {

    @Modifying
    @Transactional
    @Query("update Book b set b.name = :name, b.isbn = :isbn, b.author.id = :authorId where b.id = :id")
    void updateBook(
            @Param(value = "id") int id,
            @Param(value = "name") String name,
            @Param(value = "isbn") String isbn,
            @Param(value = "authorId") int authorId
    );
}
