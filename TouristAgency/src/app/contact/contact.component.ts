import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  myForm = new FormGroup({ 
    fullName: new FormControl('',Validators.required), 
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('',Validators.required), 
    message: new FormControl('',Validators.required), 
  });

}
