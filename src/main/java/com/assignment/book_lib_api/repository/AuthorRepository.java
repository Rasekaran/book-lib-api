package com.assignment.book_lib_api.repository;

import com.assignment.book_lib_api.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, String> {
}
