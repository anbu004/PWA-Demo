import { Component, OnInit, Input } from '@angular/core';
import { CreateDataService } from '../create-data.service';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm }
  from '@angular/forms'
  import { Http } from '@angular/http';
  import 'rxjs/add/operator/map';
@Component({
  selector: 'create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  model = {};
  getData: any = [];
  allData: any = [];
  getData1: any;
  constructor(public CreateDataService: CreateDataService,private http: Http) { 

  }
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  place: string;
  indexVal: number;








  m_email: string;
  m_phone: string;
  m_name: string;
  m_istitute: string;
  f_name: string;
  l_name: string;
  e_address: string;
  c_birth_date: string;
  child_gender: string;
  child_ethincity: string;
  fa_name: string;
  in_name: string;
  sn_name: string;
  childImage: string;
  is_child_gang: string;
  is_runaway: string;
  is_child_dis: string;
  is_child_harr: string;
  child_ncme: string;
  c_len_stay: string;
  c_r_street: string;
  c_r_address: string;
  c_r_city: string;
  c_r_country: string;
  c_r_zip: string;
  c_runaway_date: string;
  c_police_report_no: string;
  c_contact_agency: string;
  c_medical_issue: string;
  child_medical: string;
  c_mental_issue: string;
  c_run_count: string;
  c_advice: string;
  c_run_child: string;
  c_miss_reason: string;









  ngOnInit() {
    // var fauxTable = document.getElementById("faux-table");
    // var mainTable = document.getElementById("main-table");
    // var clonedElement = mainTable.cloneNode(true);
    // var clonedElement2 = mainTable.cloneNode(true);
    // fauxTable.appendChild(clonedElement);
    // fauxTable.appendChild(clonedElement2);

    
    this.getItem();
    this.gussNetworkStatus();
    
console.log(localStorage.getItem("key"));
  
  }
  submitted = false;
  powers = ['Male', 'Female'];

  onSubmit(indexVal) {
    console.log(indexVal);
    if (indexVal) {
      console.log(indexVal);
      console.log(this.getData[indexVal]);
      this.getData[indexVal] = {

        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender
      }
      console.log(this.getData);
      this.CreateDataService.addData(this.getData);
      this.firstName = "";
      this.lastName = "";
      this.gender = "";
      this.indexVal = null;
    }
    else if(indexVal==null) {
      this.model = {
        // firstName: this.firstName,
        // lastName: this.lastName,
        // gender: this.gender, place: this.place


        m_email : this.m_email,
        m_phone : this.m_phone,
        m_name : this.m_name,
        m_istitute : this.m_istitute,
        f_name : this.f_name,
        l_name : this.l_name,
        e_address : this.e_address,
        c_birth_date :this.c_birth_date,
        child_gender :this.child_gender,
        child_ethincity : this.child_ethincity,
        fa_name : this.fa_name,
        in_name :this.in_name,
        sn_name : this.sn_name,
        childImage : this.childImage,
        is_child_gang : this.is_child_gang,
        is_runaway : this.is_runaway,
        is_child_dis : this.is_child_dis,
        is_child_harr : this.is_child_harr,
        child_ncme : this.child_ncme,
        c_len_stay : this.c_len_stay,
        c_r_street : this.c_r_street,
        c_r_address : this.c_r_address,
        c_r_city : this.c_r_city,
        c_r_country : this.c_r_country,
        c_r_zip : this.c_r_zip,
        c_runaway_date : this.c_runaway_date,
        c_police_report_no : this.c_police_report_no,
        c_contact_agency : this.c_contact_agency,
        c_medical_issue : this.c_medical_issue,
        child_medical : this.child_medical,
        c_mental_issue : this.c_mental_issue,
        c_run_count : this.c_run_count,
        c_advice : this.c_advice,
        c_run_child : this.c_run_child,
        c_miss_reason : this.c_miss_reason,
      }
      if(this.CreateDataService.getData()==null){
        this.allData=[];
      }else{
        this.allData = this.CreateDataService.getData();
      }
     
    this.allData.push(this.model);
    console.log(this.allData);
    this.CreateDataService.addData(this.allData);


      // if(navigator.onLine)
      // {
      //   this.gussNetworkStatus();
      //   this.http.post('http://52.173.185.248:8080/SFCS-WebApp/sfcs/pwaSample/create',  this.model)
      //   .subscribe(
      //     res => {
      //       console.log(res);
      //       this.getItem();
      //     },
      //     err => {
      //       console.log("Error occured");
      //     }
      //   );
      //     alert("Browser is online");
      // }
      // else
      // {
      //   if(this.CreateDataService.getData()==null){
      //     this.allData=[];
      //   }else{
      //     this.allData = this.CreateDataService.getData();
      //   }
       
      // this.allData.push(this.model);
      // console.log(this.allData);
      // this.CreateDataService.addData(this.allData);
      //     alert("Browser is offline");
      // }



     





      
      //localStorage.setItem('key', JSON.stringify(this.allData));
      this.getItem();
      this.firstName = "";
      this.lastName = "";
      this.gender = "";
      this.place = "";
      //this.allData = [];
    }

  }
  getItem() {
    this.gussNetworkStatus();
   this.getData=this.CreateDataService.getData();



    // if(navigator.onLine)
    // {
    //   this.http.get("http://52.173.185.248:8080/SFCS-WebApp/sfcs/pwaSample/listAll")
    //   .subscribe(data => {
    //     var ddd = JSON.parse(data['_body']).pwa;
    //     this.getData = ddd;
      
    //    });
    // }else{
    //   this.getData=this.CreateDataService.getData();
    // }


   

   
    // if (this.getData == null) {
    //   console.log("localStorage.setItem( JSON.stringify(model))");
    //   var model = [];
    //   localStorage.setItem("key", JSON.stringify(model));
    //   console.log(localStorage.getItem("key"));
    // }
  }
  dataDelete(index) {
    console.log(index);
    console.log("un",JSON.stringify(this.getData));
    this.getData.splice(index, 1);
    console.log("un>>>",JSON.stringify(this.getData));
    this.CreateDataService.addData(this.getData);
    console.log(JSON.stringify(this.getData));
    this.indexVal = null;
    this.getItem();
  };

  editData(data, index) {
    console.log(index);
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.gender = data.gender
    this.indexVal = index;
  }


gussNetworkStatus(){
  if(navigator.onLine)
      {
        console.log("onINside")
if(this.CreateDataService.getData()){
  console.log("onINslllide")
  console.log(this.CreateDataService.getData());  
  this.CreateDataService.getData().forEach((keys : any, vals :any) => {
    console.log(keys,">>>>>>",vals);

    this.http.post('http://52.173.185.248:8080/SFCS-WebApp/sfcs/pwaSample/create', keys)
    .subscribe(
      res => {
        console.log(res);
        this.getItem();
      },
      err => {
        console.log("Error occured");
      }
    );
})
 localStorage.clear(); 
}
      }
}

}
