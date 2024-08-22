import { ValidMatIcons } from "../enums/valid-mat-icons.enum";
import { Position } from "./position.model";

export class Marker {

  constructor(public position:Position, public title:string, public icon?:ValidMatIcons, public iconColor?:string, public description?:string, public imageLink?:string){}

}
