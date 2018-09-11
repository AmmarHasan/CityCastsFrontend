import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CastService } from '../_service/cast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cast',
  templateUrl: './new-cast.component.html',
  styleUrls: ['./new-cast.component.css']
})
export class NewCastComponent implements OnInit {

  cities = [
    'Fulda',
    'Frankfurt',
    'Berlin',
    'Munich'
  ];
  newCast: FormGroup;
  uploadedImages = [];

  constructor(
    private castService: CastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newCast = this.formBuilder.group({
      'description': ['', Validators.required],
      'city': ['', Validators.required],
      'createdBy': [currentUser],
      'createdAt': new Date(),
      'images': [''],
    });
  }

  createNewCast() {
    this.newCast.controls['images'].setValue(this.uploadedImages.map(i => i.location));
    this.castService.createCast(this.newCast.value)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  onImageRemoved($event) {
    const imageName = $event.file.name;
    const imageSize = $event.file.size;
    this.uploadedImages = this.uploadedImages.filter(e => !(e.name === imageName && e.size === imageSize));
  }

  onImageUploaded($event) {
    const data = $event.serverResponse;
    if (data && data.status === 200) {
      this.uploadedImages.push(JSON.parse(data.response._body));
    }
  }

}
