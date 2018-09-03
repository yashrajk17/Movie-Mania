import { Component, OnInit,Input } from '@angular/core';
import { Service } from '../../assets/Service';


@Component({
  selector: 'app-s-result',
  templateUrl: './s-result.component.html',
  styleUrls: ['./s-result.component.css']
})


export class SResultComponent implements OnInit {
  movieData:any = []
  @Input() c:any;
  constructor(){
}

  ngOnInit() {
  }

}
