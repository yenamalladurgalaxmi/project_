import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
// import { BorrowreturnComponent } from './borrowreturn/borrowreturn.component';
import { RegistrationComponent } from './registration/registration.component';



export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'booklist', component: BooklistComponent},
    {path: 'searchbook', component: SearchbookComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: " ",pathMatch:"full",redirectTo:"/home"},
    {path: 'login', component: LoginComponent},
    // {path: 'borrowreturn', component: BorrowreturnComponent}
    {path: 'register', component: RegistrationComponent}
];
