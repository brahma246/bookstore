import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BooksListService } from './book-list.service';
import { BookStore, BookData } from './book-list.model';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  bookStore!: BookStore;
  isTitleDisabled = false;
  isPublishDateDisabled = false;
  isLoading = true;
  showErrorMessage = false;

  constructor(private booksListService: BooksListService, public fb: FormBuilder, public addDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.booksListService.getBooksList().subscribe(
      (bookdata: BookData) => {
        this.bookStore = bookdata.data;
        this.isLoading = false;
        this.showErrorMessage = false;
      },
      (err) => {
        console.log('HTTP Error', err);
        this.isLoading = false;
        this.showErrorMessage = true;
      }
    );
  }

  // sort book list
  sortBy(name: string): void {
    if (name === 'title') {
      this.isPublishDateDisabled = false;
      this.isTitleDisabled = true;
      this.bookStore?.books.sort((book1, book2) => {
        const title1 = book1.title.toUpperCase(); // ignore upper and lowercase
        const title2 = book2.title.toUpperCase(); // ignore upper and lowercase
        if (title1 < title2) {
          return -1;
        }
        if (title1 > title2) {
          return 1;
        }
        return 0;
      });
    }
    if (name === 'publishdate') {
      this.isPublishDateDisabled = true;
      this.isTitleDisabled = false;
      this.bookStore?.books.sort((a, b) => +a.PublishDate - +b.PublishDate);
    }
  }

  // delete imaage from book list
  deleteImage(index: number): void {
    this.bookStore?.books.splice(index, 1);
  }

  // open add book dialog
  openDialog(): void {
    const dialogRef = this.addDialog.open(AddBookComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
    if(result)this.bookStore.books.push(result);
    });
  }
}
