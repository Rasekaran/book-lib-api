package com.assignment.book_lib_api.controller;

import com.assignment.book_lib_api.model.Author;
import com.assignment.book_lib_api.model.Book;
import com.assignment.book_lib_api.service.BookService;
import org.hamcrest.CoreMatchers;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
@WebMvcTest(BookController.class)
public class BookControllerIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private BookService service;

    @Test
    public void whenGetBooks_thenReturnJsonArray()
            throws Exception {

        List<Book> books = Arrays.stream(new Book[] { new Book( 1, "book1", "isbn1",  new Author( 1, "John", "Cena", null )) }).toList();

        Mockito.when(service.getBooks( 0, 0 )).thenReturn( books );

        mvc.perform( MockMvcRequestBuilders.get("/books")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", CoreMatchers.is(books.get( 0 ).getName())));
    }

    @Test
    public void whenGetBooks_thenReturnJsonArrayWithGivenPage()
            throws Exception {

        List<Book> books = Arrays.stream(new Book[] {
                new Book( 1, "book1", "isbn1",  new Author( 1, "John", "Cena", null )),
                new Book( 2, "book2", "isbn2",  new Author( 1, "John", "Cena", null ))
        }).toList();

        Mockito.when(service.getBooks( 1, 2 )).thenReturn(books);

        mvc.perform( MockMvcRequestBuilders.get("/books?pageSize=2&pageNo=1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", CoreMatchers.is( books.get( 0 ).getName())))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name", CoreMatchers.is( books.get( 1 ).getName())));
    }

    @Test
    public void whenGetBook_thenReturnBookDetails()
            throws Exception {

        Book book = new Book( 2, "book1", "isbn1",  new Author( 1, "John", "Cena", null ));

        Mockito.when(service.getBook( 2 )).thenReturn( book );

        mvc.perform( MockMvcRequestBuilders.get("/book/2")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("name", CoreMatchers.is(book.getName())));
    }

    @Test
    public void whenGetBookWithNonExisting_thenReturnNotFoundStatus()
            throws Exception {


        Mockito.when(service.getBook( 10 )).thenReturn( null );

        mvc.perform( MockMvcRequestBuilders.get("/book/10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}
