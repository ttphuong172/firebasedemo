import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  url:string |any;
  selectedFile: File | any;

  constructor(
    private angularFireStorage:AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  selectFile(event: any) {
    const path = new Date().toString();
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile)
    this.angularFireStorage.upload(path,this.selectedFile)
    .snapshotChanges().pipe(
      finalize(() => {
        this.angularFireStorage.ref(path).getDownloadURL().subscribe(
          (data)=>{
            this.url=data;
            console.log(this.url)
          }
        )
      })
    ).subscribe();
  }
}
