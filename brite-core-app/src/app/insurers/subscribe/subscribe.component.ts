import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {RiskService} from "../../services/risk.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  riskTypes;
  form:FormGroup;

  constructor(private riskService:RiskService,
              private activeRoute:ActivatedRoute){}

  ngOnInit(){
    let param = this.activeRoute.snapshot.paramMap;
    console.log(param);
    let id = param["params"].id;
    this.riskService.getRiskType(id)
      .subscribe(
        (data)=>{
          console.log(data)
          this.riskTypes =data;
          // let attributes = new FormArray([]);
          // for (let a of data["attributes"]){
          //
          // }
          // this.form = new FormGroup({
          //   name: new FormControl()
          // })
        }
      )
  }
}

