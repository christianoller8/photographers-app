import { Component, OnInit } from '@angular/core';
import { Photographer } from '../../interfaces/photographer.interface';
import { PhotographersService } from '../../services/photographers-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  public photographer!: Photographer;

  constructor(
    private photographerService: PhotographersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.photographerService.getPhotographerById(id) ),
    )
    .subscribe ( photographer => {
      if(!photographer) return this.router.navigateByUrl('/photographers/list');

      this.photographer = photographer;
      return;
    }
    )
  }

  goBack(){
    this.router.navigate(['/photographers/list']);
  }
}
