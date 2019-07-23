import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from './details.model';

@Component({
  selector: 'app-mov-details',
  templateUrl: './mov-details.component.html',
  styleUrls: ['./mov-details.component.css']
})
export class MovDetailsComponent implements OnInit {


  movie:Details = new Details();

  constructor(private route:ActivatedRoute,
    private http:HttpClient) { }

  ngOnInit() {

    let id:any;
    this.route.paramMap.subscribe(par=>{
      id = par.get("id");
      this.getDetails(id)
    })
  }

  getDetails(id){
    this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=5eaf5533`).subscribe(response=>{
      this.movie = response as Details;
    })
  }

}
