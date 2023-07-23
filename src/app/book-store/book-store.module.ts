import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListService } from './books-list/book-list.service';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [BooksListComponent, AddBookComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [BooksListService],
})
export class BookStoreModule {}
