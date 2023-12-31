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
      couleur: ['', Validators.required]
    });
  }

  onSubmit() {
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
  }
  
}
