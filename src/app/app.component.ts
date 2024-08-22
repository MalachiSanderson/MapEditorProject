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
  private readonly bobbyImgLink:string = 'https://i.redd.it/dzc6ppwga9e91.jpg'
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
      this.bobbyImgLink
    ));
  }
}
