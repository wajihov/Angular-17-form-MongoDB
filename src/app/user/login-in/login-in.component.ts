import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MongoService } from '../../services/mongo.service';

@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.css'
})
export class LoginInComponent {



  constructor(private fb: FormBuilder, private mongoService: MongoService) {
  }

  signForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    gender: ['']
  });

  addStudent() {
    console.log("Document : ", document);

    this.mongoService.insererDocument('formulaire', document).subscribe(
      (reponse) => {
        console.log("Document inséré avec succès !");
      },
      (erreur) => {
        console.log("Erreur lors de l'insertion du document : ", erreur);
      }
    );
  }

  onConnect() {
    console.log('', this.signForm.value);
    this.addStudent();
  }

}

