import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      saison: [null, [Validators.required, Validators.min(1), Validators.max(7)]] // Ajoutez cette ligne pour la nouvelle question
    });
  }

  onSubmit() {
    this.submitted = true;
    this.score = 0;

    if (this.quizForm.value.question1 === 'Justin Roiland') {
      this.score++;
      this.results.question1 = true; // Ajoutez cette ligne
    } else {
      this.results.question1 = false; // Ajoutez cette ligne² 
    }
    if (this.quizForm.value.question2 === 'Morty') {
      this.score++;
      this.results.question2 = true; // Ajoutez cette ligne
    } else {
      this.results.question2 = false; // Ajoutez cette ligne
    }
    if (this.quizForm.value.question3 === 'C-137') {
      this.score++;
      this.results.question3 = true; // Ajoutez cette ligne
    } else {
      this.results.question3 = false; // Ajoutez cette ligne
    }
    if (this.quizForm.value.saison === 7) { // Ajoutez ce bloc pour la nouvelle question
      this.score++;
      this.results.saison = true;
    } else {
      this.results.saison = false;
    }
  }
}
