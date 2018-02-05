import { Component, OnInit } from '@angular/core';
import {RiskService} from "../../services/risk.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-risk-types',
  templateUrl: './risk-types.component.html',
  styleUrls: ['./risk-types.component.css']
})
export class RiskTypesComponent implements OnInit {

  constructor(private riskService:RiskService) { }
  form:FormGroup;
  fieldTypes;
  loading;
  ngOnInit() {
    this.fieldTypes = this.riskService.getFieldTypes();
    this.form = new FormGroup({
      name:new FormControl(null,Validators.required),
      attributes:new FormArray([]),
    })
  }

  addAttribute(){
    let attribute = this.form.get("attributes") as FormArray;

    attribute.push(new FormGroup({
      name: new FormControl(null,Validators.required),
      label:new FormControl(null, Validators.required),
      required:new FormControl(false),
      type:new FormControl("",Validators.required),
      max_length: new FormControl(null),
      options:new FormArray([])
    }))
  }

  initOption(index){

    let attributes = this.form.get("attributes") as FormArray;
    console.log(attributes,index)
    let fg = attributes.controls[index] as FormGroup;
    let type = fg.value.type;

    let options = fg.controls.options as FormArray;
    while (0 !== options.length) {
      options.removeAt(0);
    }
    if(type ==='enum'){
      options.push(
        new FormGroup({
          value:new FormControl(null,Validators.required)
        })
      )
    }
    else if(type ==='boolean'){
      this.initOptionBoolean(index);
    }
    else{
      let options = fg.controls.options as FormArray;
      while (0 !== options.length) {
        options.removeAt(0);
      }
    }
  }

  addOption(index){
    let attributes = this.form.get("attributes") as FormArray;
    let fg = attributes.controls[index] as FormGroup;

    let options = fg.controls.options as FormArray;
    options.push(
      new FormGroup({
        value:new FormControl(null,Validators.required)
      })
    )
  }
  initOptionBoolean(index){

    let attributes = this.form.get("attributes") as FormArray;
    let fg = attributes.controls[index] as FormGroup;
    let options = fg.controls.options as FormArray;
    while (0 !== options.length) {
        options.removeAt(0);
      }
    options.push(
      new FormGroup({
        value:new FormControl("True",Validators.required)
      })
    );
    options.push(
      new FormGroup({
        value:new FormControl("False",Validators.required)
      })
    )
    console.log(options)
  }
  //


  deleteField(index){
    let array = this.form.get("attributes") as FormArray;
    array.removeAt(index);
  }

  deleteOption(index){
    let attributes = this.form.get("attributes") as FormArray;
    let fg = attributes.controls[index] as FormGroup;
    let options = fg.controls.options as FormArray;
    options.removeAt(index);
  }

  save(){
    this.loading = true;
    let data = this.form.value;
    data["fields"] = {attributes:this.form.value.attributes};
    data["name"] = this.form.value.name;
    data["insurer"] = 1;
    this.riskService.createNewRiskType(data)
      .subscribe(
        (data)=>{
          console.log(data)
          this.form.reset();
        },
        (error)=>{
          console.log(error)
        },
        ()=>{
          this.loading = false;
        }
      )
  }
}
