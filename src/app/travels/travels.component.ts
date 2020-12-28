import { Component, OnInit } from '@angular/core';
import { locations } from '../products';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
 locations=locations;
 
  constructor() { }

  ngOnInit(): void {
  }

}
