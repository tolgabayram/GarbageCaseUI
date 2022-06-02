import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarbagerecordApiService {
readonly garbageRecordAPIurl ="https://localhost:7159/api";

  constructor(private http:HttpClient) {   
    
  }
 

//Garbage Records
  getGarbageRecordList():Observable<any[]>{return this.http.get<any>(this.garbageRecordAPIurl +'/WasteRecords')}

  addGarbageRecord(data:any){return this.http.post(this.garbageRecordAPIurl +'/WasteRecords',data)}

  updateGarbageRecord(id:number|string,data:any){return this.http.put(this.garbageRecordAPIurl +'/WasteRecords/${id}',data)}

  deleteGarbageRecord(id:number|string){return this.http.delete(this.garbageRecordAPIurl +'/WasteRecords/${id}')}
  //Store
  getStoreList():Observable<any[]>{return this.http.get<any>(this.garbageRecordAPIurl +'/Stores')}

  addStoreRecord(data:any){return this.http.post(this.garbageRecordAPIurl +'/Stores',data)}

  updateStoreRecord(id:number|string,data:any){return this.http.put(this.garbageRecordAPIurl +'/Stores/${id}',data)}

  deleteStoreRecord(id:number|string){return this.http.delete(this.garbageRecordAPIurl +'/WasteTypes/${id}')}
  //WasteTypes
  getWasteTypeList():Observable<any[]>{return this.http.get<any>(this.garbageRecordAPIurl +'/WasteTypes')}

  addWasteTypeRecord(data:any){return this.http.post(this.garbageRecordAPIurl +'/WasteTypes',data)}
  
  updateWasteTypeRecord(id:number|string,data:any){return this.http.put(this.garbageRecordAPIurl +'/WasteTypes/${id}',data)}
  
  deleteWasteTypesRecord(id:number|string){return this.http.delete(this.garbageRecordAPIurl +'/WasteTypes/${id}')}
}
 