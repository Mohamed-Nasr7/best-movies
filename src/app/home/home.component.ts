import { AllMoviesService } from './../services/all-movies.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { Details } from './../mov-details/details.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isVisible = false;
  movies:Movie = new Movie();
  details:Details = new Details();
  name:string;

  constructor(private http:HttpClient,
    private allmovs:AllMoviesService) { }


  showModal(id:any): void {
    this.isVisible = true;
    this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=5eaf5533`).subscribe(response=>{
      this.details = response as Details;
      console.log(this.details);
    })
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }



  ngOnInit() {
    this.allmovs.getMovs().subscribe(res=>{
      this.movies = res as Movie; 
    });


  }

}
