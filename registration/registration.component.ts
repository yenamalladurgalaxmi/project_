import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.username, this.email, this.password).subscribe(
      (response) => {
        alert('Registration successful. Please log in.');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        alert('Registration failed. Please try again.');
      }
    );
  }
}