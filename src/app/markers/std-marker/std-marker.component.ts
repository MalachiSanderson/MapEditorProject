import { Component, Input } from '@angular/core';
import { Marker } from 'src/app/models/marker.model';
@Component({
  selector: 'app-std-marker',
  templateUrl: './std-marker.component.html',
  styleUrls: ['./std-marker.component.scss']
})
export class StdMarkerComponent {
  @Input() marker!:Marker;
  private _isHovering:boolean = false;
  get isHovering():boolean {
    return this._isHovering;
  }


  constructor(){}

  public onClickMarker(){
    console.warn('CLICKED MARKER - '+ this.marker.title + ', at position: '+ this.marker.position.toString() +'\nThis marker has the following description...\n '+this.marker.description);
  }

  public onMouseEnter(){
    this._isHovering = true;
  }

  public onMouseLeave(){
    this._isHovering = false;
  }

}
