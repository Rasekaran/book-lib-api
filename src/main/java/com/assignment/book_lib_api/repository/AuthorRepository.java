package com.assignment.book_lib_api.repository;

import com.assignment.book_lib_api.model.Author;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AuthorRepository extends JpaRepository<Author, String> {

    @Modifying
    @Transactional
    @Query("update Author a set a.firstName = :firstName, a.lastName = :lastName where a.id = :id")
    void updateAuthor(
            @Param(value = "id") int id,
            @Param(value = "firstName") String firstName,
            @Param(value = "lastName") String lastName
    );
}
