import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  login() {
    console.log("Hello Login : ", this.formAuth.value);
  }
  onConnect() {
    console.log('Method not implemented.', this.formAuth.value);
  }

  formAuth: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    mail: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  /* user: any = {
    name: '',
    password: '',
    email: ''
  } */


  /* formulaire = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  }); */

  onSubmit() {
    //console.log("Hello user : ", this.user);

    /* const nom = this.formulaire.value.nom;
    const email = this.formulaire.value.email;
    const message = this.formulaire.value.message; */

  }
  ngOnInit() {
    this.formAuth = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      mail: new FormControl("")
    });
  }

}
