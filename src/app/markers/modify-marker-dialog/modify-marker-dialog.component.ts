import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marker } from 'src/app/models/marker.model';

@Component({
  selector: 'app-modify-marker-dialog',
  templateUrl: './modify-marker-dialog.component.html',
  styleUrls: ['./modify-marker-dialog.component.scss']
})
export class ModifyMarkerDialogComponent implements OnInit{

  public modifyingMarker!:Marker;

  public form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    icon: ['', [Validators.minLength(2), Validators.maxLength(60)]],
    iconColor: ['', [] ],
    description: ['', [Validators.minLength(2)]  ],
    imageLink: ['', [Validators.minLength(2)]  ]
  } );

  constructor(@Inject(MAT_DIALOG_DATA) public data: { marker:Marker }, public dialogRef: MatDialogRef<ModifyMarkerDialogComponent>, private formBuilder:FormBuilder){
    this.modifyingMarker = new Marker(this.data.marker.position, this.data.marker.title, this.data.marker.icon, this.data.marker.iconColor, this.data.marker.description, this.data.marker.imageLink);
    this.form.patchValue({
      title: this.modifyingMarker.title,
      icon: this.modifyingMarker.icon,
      iconColor: this.modifyingMarker.iconColor,
      description: this.modifyingMarker.description,
      imageLink: this.modifyingMarker.imageLink
    });

  }

  ngOnInit(): void {
    this.dialogRef.updateSize('40%', '70%');
  }


  public onSubmit() {
      if(this.form.valid)
      {
        let newInfo:Marker = this.data.marker;
        newInfo.title = this.title;
        newInfo.icon = this.icon,
        newInfo.iconColor = this.iconColor,
        newInfo.description = this.description,
        newInfo.imageLink = this.imageLink


        this.dialogRef.close(newInfo)
      }
      else console.error('ERROR: cannot submit the page with the following information because there is invalid information present.');
  }

  public onClose(){
    this.dialogRef.close();
  }

  public onDeleteMarkerClicked() {
    this.dialogRef.close('DELETE');
  }




  get title() {
    return this.form.get('title')?.value
  }

  get icon() {
    return this.form.get('icon')?.value
  }

  get iconColor() {
    return this.form.get('iconColor')?.value
  }

  get description() {
    return this.form.get('description')?.value
  }

  get imageLink() {
    return this.form.get('imageLink')?.value
  }

}
