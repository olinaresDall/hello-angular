import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [
    new Person("Federico", "Difabio", 28),
    new Person("Octavio", "Linares", 25),
  ];
  personSelected: Person | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }



  selectPerson(p: Person) {
    this.personSelected = p;
  }
}
