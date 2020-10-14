import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../../shared/services/authentication.service';
@Component({
  selector: 'app-rigestration',
  templateUrl: './rigestration.component.html',
  styleUrls: ['./rigestration.component.css']
})
export class RigestrationComponent implements OnInit {
form;
// tslint:disable-next-line: no-shadowed-variable
constructor(private FB: FormBuilder , private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.form = this.FB.group(
      {
        name: this.FB.control(''),
        password : this.FB.control(''),
        job_title: this.FB.control(''),
        phones: this.FB.control(''),
        location: this.FB.control(''),
        roleName: this.FB.control('')

      }
     );
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.AuthenticationService.rigestration(this.form.value).subscribe(
      res =>  console.log(res)
    );
    this.form.reset();
    }
}
