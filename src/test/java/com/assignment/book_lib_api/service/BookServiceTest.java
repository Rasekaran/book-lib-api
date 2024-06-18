package com.assignment.book_lib_api.service;

import lombok.Setter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class BookServiceTest {

    @Autowired
    @Setter
    protected BookService bookService;

    @Test
    void whenGetBooks_thenItShouldReturnAllBooks() {

    }
}