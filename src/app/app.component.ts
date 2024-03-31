import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Core/nav-bar/nav-bar.component';
import { FooterComponent } from './Core/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthorsResponseModel} from './shared/AuthorsResponseModel';

import { subscribe } from 'node:diagnostics_channel';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Authors } from './shared/Authors';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,FooterComponent,SharedModule,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'Library_Database';
  BaseURL="http://localhost:60805/api/Authors?PageIndex=0&PageSize=10";
  authors :Authors[] = [];

  constructor(private http:HttpClient)
  {}

  getauthors():Observable<AuthorsResponseModel>
  {
    return this.http.get<AuthorsResponseModel>(this.BaseURL);
  }   
  
  
  ngOnInit(): void {
    this.getauthors().subscribe(
      (response:AuthorsResponseModel)=>{
      this.authors=response.items
      console.log(this.authors);
    });
  }
  
}
