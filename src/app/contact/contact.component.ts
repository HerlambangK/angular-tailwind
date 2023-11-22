import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  // @Input() form!: any;
  // @Output() formChange = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      email: '',
      message: '',
    });
    // Inisialisasi komponen
    console.log('ContactUsComponent constructor');
  }

  ngOnInit(): void {
    // Logika yang dijalankan saat komponen diinisialisasi
    console.log('ContactUsComponent ngOnInit');
    console.log(this.form.value);
  }

  onSubmit(): void {
    console.log('Formulir valid. Data dikirim:', this.form.value);
  }
}
