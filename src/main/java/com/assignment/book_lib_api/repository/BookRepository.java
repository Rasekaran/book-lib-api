package com.assignment.book_lib_api.repository;

import com.assignment.book_lib_api.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository  extends JpaRepository<Book, String> {
}
