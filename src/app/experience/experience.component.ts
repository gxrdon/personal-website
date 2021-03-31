import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  skillArr: Object[] = [];
  techArr: Object[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.skillArr = [
      {"name": "JavaScript", "stars": 5},
      {"name": "Typescript", "stars": 5},
      {"name": "Java", "stars": 5},
      {"name": "Python", "stars": 4},
      {"name": "C++", "stars": 4},
      {"name": "Perl", "stars": 3},
      {"name": "C", "stars": 3},
      {"name": "OCaml", "stars": 3},
      {"name": "Ruby", "stars": 3},
      {"name": "Rust", "stars": 1}
    ]

    this.techArr = [
      {"name": "Angular", "stars": 5},
      {"name": "Agile Framework (Scrum)", "stars": 5},
      {"name": "Git", "stars": 5},
      {"name": "MSSQL", "stars": 4},      
      {"name": "NodeJS", "stars": 4},      
      {"name": "Spring Boot", "stars": 4},
      {"name": "AWS", "stars": 2},
      {"name": "FIX", "stars": 2},
      {"name": "MongoDB", "stars": 2}
    ]
  }

}
