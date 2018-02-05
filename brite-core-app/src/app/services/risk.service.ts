/**
 * Created by ebuka on 03/02/18.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
declare var Django;
@Injectable()

export class RiskService {

  constructor(private http:HttpClient){}

  getRiskType(type){
    // const url = Django.url("risk-api:risk-detail",[type]);
    const url = "/main/risk/api/v1/"+type+"/";
    return this.http.get(url);
  }

  getFieldTypes(){
    const url = "/main/field-types/api/v1/";
    return this.http.get(url);
  }

  createNewRiskType(data){
    const url = "/main/risk/api/v1/";
    return this.http.post(url,data);
  }


  getRiskTypes(page,pageSize){
    const url = "/main/risk/api/v1/"+"?page="+page+"&page_size="+pageSize;
    return this.http.get(url);
  }
}
