import {Component, OnInit} from '@angular/core';
import {RiskService} from "./services/risk.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(){}

  ngOnInit(){

  }
}
