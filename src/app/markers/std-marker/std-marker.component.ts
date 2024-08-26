import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marker } from 'src/app/models/marker.model';
import { MatDialog } from '@angular/material/dialog';
import { ModifyMarkerDialogComponent } from '../modify-marker-dialog/modify-marker-dialog.component';

@Component({
  selector: 'app-std-marker',
  templateUrl: './std-marker.component.html',
  styleUrls: ['./std-marker.component.scss']
})
export class StdMarkerComponent implements OnInit{
  @Input() marker!:Marker;
  private _isHovering:boolean = false;
  get isHovering():boolean {
    return this._isHovering;
  }


  @Output() readonly markerUpdate = new EventEmitter<{oldMarker:Marker, updatedMarker:Marker}>();
  @Output() readonly deletedMarker = new EventEmitter<Marker>();

  constructor(private readonly dialog:MatDialog){}

  ngOnInit(): void {
    if(this.marker.deleted) {
      console.error('Attempting to initialize a deleted marker: '+this.marker.title);
    }
  }

  public onClickMarker(event:MouseEvent, marker:Marker){
    event.stopPropagation();
    event.preventDefault();
    const dialogRef = this.dialog.open(ModifyMarkerDialogComponent, {data: {marker: marker}});
    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
          if(result==='DELETE'){
            marker.deleted = true;
            this.deletedMarker.emit(marker);
          }
          else if(result instanceof Marker) {
            this.markerUpdate.emit({oldMarker: marker, updatedMarker: result });
          }
          else {
            console.error('Unknown marker dialog result!', result);
          }
        }
      },
      (error)=> console.error(error)
    );
  }

  public onMouseEnter(){
    this._isHovering = true;
  }

  public onMouseLeave(){
    this._isHovering = false;
  }

}
