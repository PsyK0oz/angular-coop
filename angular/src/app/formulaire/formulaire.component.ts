import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  quizForm!: FormGroup;
  submitted = false;
  score = 0;
  results: any = {}; // Ajoutez cette ligne pour suivre la validité des réponses
  users: any = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      couleur: ['', Validators.required]
    });
  }

  delete(){
    localStorage.clear();
  }
  onSubmit() {
    // localStorage.clear();
    // localStorage.setItem('nom', this.quizForm.controls['nom'].value);
    // localStorage.setItem('email', this.quizForm.controls['email'].value);
    // localStorage.setItem('question1', this.quizForm.controls['question1'].value);
    // localStorage.setItem('question2', this.quizForm.controls['question2'].value);
    // localStorage.setItem('question3', this.quizForm.controls['question3'].value);

    
    this.submitted = true;
    this.score = 0;
  
    if (this.quizForm.value.question1 === 'Justin Roiland') {
      this.score++;
      this.results.question1 = true;
    } else {
      this.results.question1 = false;
    }
    if (this.quizForm.value.question2 === 'Morty') {
      this.score++;
      this.results.question2 = true;
    } else {
      this.results.question2 = false;
    }
    if (this.quizForm.value.question3 === 'C-137') {
      this.score++;
      this.results.question3 = true;
    } else {
      this.results.question3 = false;
    }


    let formData = {
      nom: this.quizForm.controls['nom'].value,
      email: this.quizForm.controls['email'].value,
      question1: this.quizForm.controls['question1'].value,
      question2: this.quizForm.controls['question2'].value,
      question3: this.quizForm.controls['question3'].value,
      score: this.score
    };
    let formDataJson = JSON.stringify(formData);
  
    let indexUsers = localStorage.length;
    // Stocker les données JSON dans le LocalStorage
    localStorage.setItem(indexUsers.toString(), formDataJson);
    


    // const users = [];
    this.users = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== null) {
        let value = localStorage.getItem(key);
        console.log("value = ", value);
        // changer le format de la valeur en JSON
        let valueJson = JSON.parse(value!);
        console.log("valueJson = ", valueJson);
        //récuperer le nom et le score
        let name = valueJson.nom;
        console.log("name = ", name);
        let score = valueJson.score;
        console.log("score = ", score);
        this.users.push({ name: name, score: score });
      }
    }

    console.table(this.users);
  }
}
