import { Component, OnInit } from '@angular/core';
import {RiskService} from "../services/risk.service";

@Component({
  selector: 'app-insurers',
  templateUrl: './insurers.component.html',
  styleUrls: ['./insurers.component.css']
})
export class InsurersComponent implements OnInit {
  riskList;
  pageSize =2;
  page=1;
  currentPage;
  constructor(private riskService:RiskService) { }

  ngOnInit(){
    this.getRiskTypes();

  }

  getRiskTypes(){
    this.riskList = this.riskService.getRiskTypes(this.page,this.pageSize);
  }
  pageChanged(page){
    this.page = page;
    this.getRiskTypes();
  }

}
