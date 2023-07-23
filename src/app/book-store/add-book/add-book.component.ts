import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBookComponent>
  ) {
    // Reactive Form
    this.addBookForm = this.fb.group({
      imageUrl: [''],
      title: [''],
      PublishDate: [''],
    });
  }

  ngOnInit(): void {}
  // add image url
  addImage(event: any) {
    const file = (event?.target as HTMLInputElement)?.files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.addBookForm?.controls['imageUrl'].setValue(reader.result as string);
    }
    reader.readAsDataURL(file);
  }
  // Submit Form
  submit() {
    console.log(this.addBookForm.value);
  }
}
