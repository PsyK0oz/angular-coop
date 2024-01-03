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
  reponses: any = [];
  scoreDecevent = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      couleur: ['', Validators.required]
    });
  }

  delete(){
    localStorage.clear();
  }
  onSubmit() {
    this.reponses = [
      'Justin Roiland',
      'Morty',
      'C-137',
      '1batiment',
      'Poopybutthole'
    ];
    this.submitted = true;
    this.score = 0;
  
    if (this.quizForm.value.question1 === this.reponses[0]) {
      this.score++;
      this.results.question1 = true;
    } else {
      this.results.question1 = false;
    }
    if (this.quizForm.value.question2 === this.reponses[1]) {
      this.score++;
      this.results.question2 = true;
    } else {
      this.results.question2 = false;
    }
    if (this.quizForm.value.question3 === this.reponses[2]) {
      this.score++;
      this.results.question3 = true;
    } else {
      this.results.question3 = false;
    }
    if (this.quizForm.value.question4 === this.reponses[3]) {
      this.score++;
      this.results.question4 = true;
    } else {
      this.results.question4 = false;
    }
    if (this.quizForm.value.question5 === this.reponses[4]) {
      this.score++;
      
      this.results.question5 = true;
    } else {
      this.results.question5 = false;
    }
    console.log(this.results.question5);
    if(this.score < 4){
      this.scoreDecevent = true;
    }

    
    


    // const users = [];
    this.users = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== null) {
        let value = localStorage.getItem(key);
        // changer le format de la valeur en JSON
        let valueJson = JSON.parse(value!);
        //récuperer le nom et le score
        let name = valueJson.nom;
        let score = valueJson.score;
        this.users.push({ name: name, score: score });
      }
    }



    let formData = {
      nom: this.quizForm.controls['nom'].value,
      email: this.quizForm.controls['email'].value,
      question1: this.quizForm.controls['question1'].value,
      question2: this.quizForm.controls['question2'].value,
      question3: this.quizForm.controls['question3'].value,
      question4: this.quizForm.controls['question4'].value,
      question5: this.quizForm.controls['question5'].value,
      score: this.score
    };
    let formDataJson = JSON.stringify(formData);
  
    let indexUsers = localStorage.length;
    // Stocker les données JSON dans le LocalStorage
    localStorage.setItem(indexUsers.toString(), formDataJson);
  }


  actualiserLaPage (){
    location.reload();
  }


}
