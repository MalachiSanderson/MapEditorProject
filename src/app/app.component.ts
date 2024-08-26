import { Component, OnInit } from '@angular/core';
import { Marker } from './models/marker.model';
import { Position } from './models/position.model';
import { ValidMatIcons } from './enums/valid-mat-icons.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public static readonly mapLink_SystemShock_Medical:string = 'https://gamepretty.com/wp-content/uploads/2023/06/unnamed-file-322.jpg'
  private readonly placeholderText:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  private readonly bobbyImgLink:string = 'https://i.redd.it/dzc6ppwga9e91.jpg';
  private readonly micahImgLink:string = 'https://media.licdn.com/dms/image/D5603AQGIb9x2c9ouFw/profile-displayphoto-shrink_800_800/0/1691432953973?e=2147483647&v=beta&t=evCEkfFgHfSkWJN55FG2VYI877Lkfy9FaKSf0c1xj1s';
  public readonly imageLink = AppComponent.mapLink_SystemShock_Medical;
  public markers: Array<Marker> = [];
  isZoomed = false;

  constructor(){}

  ngOnInit(): void {

  }

  public toggleZoom() {
    this.isZoomed = !this.isZoomed;
    const img = document.querySelector('.full-image') as HTMLImageElement;
    img.classList.toggle('zoomed', this.isZoomed);
  }

  public addMarker(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.markers.push(new Marker(
      new Position(x,y),
      'Marker #'+(this.markers.length+1),
      (((this.markers.length+1)%2) === 0 )? ValidMatIcons.Info : ValidMatIcons.Lock,
      (((this.markers.length+1)%2) === 0 )? 'red' : 'orange',
      'Marker #'+(this.markers.length+1) +': '+ this.placeholderText,
      (((this.markers.length+1)%2) === 0 )? this.bobbyImgLink : this.micahImgLink,
    ));
  }

  public onCatchMarkerUpdate(oldMarker:Marker, updatedMarker:Marker) {
    const foundMarker = this.markers.find(m=>m.uniqueID===oldMarker.uniqueID);
    if(foundMarker) {
      foundMarker.title = updatedMarker.title;
      foundMarker.description = updatedMarker.description;
      foundMarker.icon = updatedMarker.icon;
      foundMarker.iconColor = updatedMarker.iconColor;
      foundMarker.imageLink = updatedMarker.imageLink;
    }
    else console.error('Could not find a matching marker with ID: '+ oldMarker.uniqueID);
  }
  public onCatchDeleteMarker(marker:Marker) {
    const foundMarkerIndex = this.markers.findIndex(m=>m.uniqueID===marker.uniqueID);
    if(foundMarkerIndex > -1) {
     this.markers.splice(foundMarkerIndex, 1);
    }
    else console.error('Could not find a matching marker with ID: '+ marker.uniqueID);
  }

}
