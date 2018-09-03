import { Component } from '@angular/core';
import { Service } from '../assets/Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThoughtWorks-Movie-App';
  movieData:any = []
  languageList:any = []
  countryList:any = [];
  movieTitle:string = '';
  lang: any = [];
  con: any = [];
  reverse: boolean = false;
  order : string = '';
  
  constructor(private dataService: Service){
      this.dataService.getMovieData().subscribe(data => {
        this.movieData = data;
        this.setLanguageData();
        console.log(this.countryList)

      })
  }
  setLanguageData()
  {
      
    for(let val in this.movieData)
    {
      if(!this.languageList.includes(this.movieData[val].language) && 
      this.movieData[val].language != "")
        this.languageList.push(this.movieData[val].language);
      if(!this.countryList.includes(this.movieData[val].country) && 
        this.movieData[val].country != "")
          this.countryList.push(this.movieData[val].country);
    }
  }
  search(data: any)
  {
    this.movieTitle = String(data).trim().toLowerCase();
  }
  filterLang(data){
    if(this.lang.includes(data))
        this.lang.splice(this.lang.indexOf(data),1);
    else
      this.lang.push(data)
    console.log(this.lang);
  }
  filterCountry(data){
    if(this.con.includes(data))
        this.con.splice(this.con.indexOf(data),1);
    else
      this.con.push(data)
  }
  orderBy(data1,data2)
  {
      this.order = data1;
      this.reverse = data2;

  }
}
