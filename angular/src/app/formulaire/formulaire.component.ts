import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  // Variables pour le formulaire ainsi que le score
  quizForm!: FormGroup;
  submitted = false;
  score = 0;
  results: any = {};
  users: any = [];
  reponses: any = [];
  scoreDecevent = false; // permet de savoir si le score est en dessous de 4
  aucunAutreJoueur = true; // permet de savoir si il y a d'autres joueurs enregistrés dans la base

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Initialiser le formulaire
    this.quizForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
    });
  }

  delete(){ //test a suprimer
    localStorage.clear();
  }
  onSubmit() {
    if (this.quizForm.valid) {
      // Procéder à la soumission du formulaire

      // Bonnes réponses du formulaire
      this.reponses = [
        'Justin Roiland',
        'Morty',
        'C-137',
        '1batiment',
        'Poopybutthole'
      ];
      this.submitted = true;
      this.score = 0;
    
      // Calculer le score en fonction des réponses du formulaire
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

      // Si le score est inférieur à 4, afficher un message
      if(this.score < 4){
        this.scoreDecevent = true;
      }

      // Récupérer les données du LocalStorage (stokage de données)
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

      // permet de ne pas montrer la partie des autres joueurs si il n'y en a pas
      if (localStorage.length <= 1) {
        this.aucunAutreJoueur = false;
      }

      // Stocker les données du formulaire dans un objet
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
      // Stocker les données JSON dans le LocalStorage (stockage des données en local)
      localStorage.setItem(indexUsers.toString(), formDataJson);
    }
  }

  actualiserLaPage (){ // Actualiser la page pour recommencer le formulaire
    location.reload();
  }
}
