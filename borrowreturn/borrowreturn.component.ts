import { Component } from '@angular/core';
@Component({ selector: 'app-borrowreturn', 
standalone: true,
 
imports: [],
  templateUrl: './borrowreturn.component.html',  styleUrl: './borrowreturn.component.css'})export class BorrowreturnComponent {  message: string | null = null;
  onsubmit() {    const action = (<HTMLSelectElement>document.getElementById('action')).value;
    if (action === 'borrow') {      this.message = 'Successfully Borrowed';    } else if (action === 'return') {      this.message = 'Successfully Returned';    }
    setTimeout(() => {      this.message = null;    }, 3000);  }

}
