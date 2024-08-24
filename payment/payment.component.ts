// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { RouterModule, RouterOutlet } from '@angular/router';

// interface PaymentDetails {
//   amount: string;
//   nameOnCard: string;
//   cardNumber: string;
//   expiryDate: string;
//   securityCode: string;
//   zipCode: string;
// }

// @Component({
//   selector: 'app-payment',
//   standalone: true,
//   imports: [FormBuilder,FormsModule,FormGroup,Validators,CommonModule,RouterModule,RouterOutlet],
//   templateUrl: './payment.component.html',
//   styleUrl: './payment.component.css'
// })
// export class PaymentComponent implements OnInit{
//   paymentForm: FormGroup;
//   constructor(private fb: FormBuilder) {}

//   ngOnInt(): void {
//     this.initializeForm();

//   }

//   initializeForm() {
//     this.paymentForm = this.fb.group({
//       amount: [{ value: '$500.00', disabled: true }],
//       nameOnCard: ['', [Validators.required]],
//       cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
//       expiryDate: ['',[Validators.required, Validators.pattern('^(0[1-9]|[0-2])/(\\d{2})$')]],
//       securityCode: ['',[Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
//       zipCode: ['',[Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
//     });
//   }

//   onSubmit() {
//     if (this.paymentForm.valid) {
//       // cast the form value to the PaymentDetails interface
//       const paymentDetails: PaymentDetails = this.paymentForm.getRawValue() as PaymentDetails;
//       console.log('Form Submitted', paymentDetails);

//     }

//   }

// }
