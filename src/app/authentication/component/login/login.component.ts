import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  roleName = 'pending';
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private FB: FormBuilder , private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.form = this.FB.group(
      {
        name: this.FB.control(''),
        password: this.FB.control(''),

      }
     );
  }
  onSubmit(): void {
  console.log(this.form.value);
  this.AuthenticationService.login(this.form.value).subscribe(
    res =>  this.roleName = res
  );
  this.form.reset();

  switch (this.roleName) {
    case  'User': {
     // this.router.navigate(['items'], { relativeTo: this.route });
       break;
    }
    case 'SuperAdmin': {

       break;
    }
    case 'Admin': {

       break;
    }
 }
  }

}
