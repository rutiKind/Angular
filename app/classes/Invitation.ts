import { Time } from "@angular/common"

export class Invitation{
    constructor(public orderId?:number,public userId?:number,public tripId?:number,public numPlace?:number,public tripDate?:Date,public destination?:string,public orderTime?:Time,public orderDate?:Date,public name?:string){
    }
}