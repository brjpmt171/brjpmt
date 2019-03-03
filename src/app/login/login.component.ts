import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userForm:FormGroup
  private user:any
  errorMessage:string
  private isSaved:boolean
  private users:any[]

  constructor(private builder:FormBuilder,private router : Router) { 
  this.buildForm()
  }
  ngOnInit() {
  }
  buildForm() {
    this.userForm = this.builder.group({
     
      email: ['',[
        Validators.required,
        Validators.email
      ]
      ],
      password: ['',Validators.required],
    })
  }
  save() {
    this.router.navigate(['./renter-dashboard']);
  }

}
