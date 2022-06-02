import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GarbagerecordApiService } from 'src/app/garbagerecord-api.service';

@Component({
  selector: 'app-show-garbagerecord',
  templateUrl: './show-garbagerecord.component.html',
  styleUrls: ['./show-garbagerecord.component.css']
})
export class ShowGarbagerecordComponent implements OnInit {
  garbageRecodList$!:Observable<any[]>;
  wasteTypeList$!:Observable<any[]>;
  wasteTypesList:any=[];
  wasteTypeProperty$!:Observable<any[]>;
  wastePropertyList:any=[];
  storeList$!:Observable<any[]>;
  storeList:any =[];

  //Variables
  modalTitle:string ='';
  activateAddEditGarbageRecordComponenent:boolean =false;
  garbageRecord:any;

  //Maps
  wasteTypesMap:Map<number,string> =new Map();
  wastePropertyMap:Map<number,string> =new Map();
  storesMap:Map<number,string> =new Map();

  constructor(private service:GarbagerecordApiService) { }

  ngOnInit(): void {
     this.garbageRecodList$ =this.service.getGarbageRecordList();
     this.storeList$=this.service.getStoreList();
     this.wasteTypeList$=this.service.getWasteTypeList();
     this.refreshStoresMap();
     this.refreshwasteTypesMap();
     this.refreshwastePropertyMap();
  }
  refreshStoresMap(){
    this.service.getStoreList().subscribe(data =>{ 
      this.storeList =data;

      for(let i=0;i<data.length;i++)
      {
        this.storesMap.set(this.storeList[i].id,this.storeList[i].name);
      }
    }
      )
  }
  refreshwasteTypesMap(){
    this.service.getWasteTypeList().subscribe(data =>{ 
      this.wasteTypesList =data;

      for(let i=0;i<data.length;i++)
      {
        this.wasteTypesMap.set(this.wasteTypesList[i].id,this.wasteTypesList[i].wasteTypeName);
        
      }
    }
      )
  }
  refreshwastePropertyMap(){
    this.service.getWasteTypeList().subscribe(data =>{ 
      this.wasteTypesList =data;

      for(let i=0;i<data.length;i++)
      {
      
        this.wastePropertyMap.set(this.wasteTypesList[i].id,this.wasteTypesList[i].wasteProperty);
      }
    }
      )
  }
  modalAdd(){
    this.garbageRecord ={
      
        id: 0,
        month: null,
        storeId: 0,   
        wasteTypeId: 0,   
        quantity: 0,
        quantityType: null,
        receivingCompany: null,
        wasteDate:null,
        wasteExplanation: null    

    }
    this.modalTitle='Atık Kaydı Ekle';
    this.activateAddEditGarbageRecordComponenent=true;
  }

}
