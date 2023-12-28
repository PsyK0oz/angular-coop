import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  quizForm!: FormGroup; // Utilisez l'opérateur d'affectation définitive ici
  submitted = false;
  score = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.score = 0;

    if (this.quizForm.value.question1 === 'Justin Roiland') {
      this.score++;
    }
    if (this.quizForm.value.question2 === 'Morty') {
      this.score++;
    }
    if (this.quizForm.value.question3 === 'C-137') {
      this.score++;
    }
  }
}
