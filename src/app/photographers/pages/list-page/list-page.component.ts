import { Component, OnInit } from '@angular/core';
import { PhotographersService } from '../../services/photographers-service.service';
import { Photographer } from '../../interfaces/photographer.interface';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{

  public photographers: Photographer[] = [];
  constructor(private photographersService: PhotographersService) { }

  ngOnInit():void {
    this.photographersService.getPhotographers()
    .subscribe(data => {
      this.photographers = data;
    }, error => {
      console.error('Error fetching data: ', error);
    });
    }
}