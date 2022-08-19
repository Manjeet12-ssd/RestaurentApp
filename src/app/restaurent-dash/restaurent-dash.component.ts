import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {

  formValue!:FormGroup
  restaurentModelObj :RestaurentData = new RestaurentData;
  allRestaurentData :any;
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[],
      email:[],
      mobile:[],
      address:[],
      services:[]
    })
    this.getAllData()
  }

  //Now Subscibing our data which is maped via Services
  addResto(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res=>{
      console.log(res);
      alert("Restaurent Data Added Successfully. 😉👌");

      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
    },
      err=>{
        alert("Kuch to Gadbad hai Daya.");
      }
    )
  }

  //get all data
  getAllData(){
    this.api.getRestaurent().subscribe(res=>{
      this.allRestaurentData = res;
    })
  }

  //delete data method
  deleteResto(data:any){
    this.api.deleteRestaurent(data.id).subscribe(res=>{
      alert('Record Deleted Successfully.');
      this.getAllData();
    })
  }
}
