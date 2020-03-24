import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  tecnologys= ['Todas','Front-end','Back-end','Javascript','Html','Java SE','Node js', 'Angular js', 'Angular 8+']
  works = [
    {tittle:"Adidas", srcimg:"../../../assets/imgs/card-img.jpg" ,tags: ["javascript","todas"]},
    {tittle:"Nike", srcimg:"../../../assets/imgs/card-img.jpg",tags : ["angular 8+","todas"]},
    {tittle:"Ekia technology", srcimg:"../../../assets/imgs/card-img.jpg",tags : ["node js","todas"]},
    {tittle:"Nike", srcimg:"../../../assets/imgs/card-img.jpg",tags : ["html","todas"]},
  ]
  workselected;
  tagfilter;
  constructor() {
    this.workselected = this.works;
   }

  ngOnInit(): void {
  }
 
  filter(value:string){
    this.workselected = this.works.filter(res => res.tags.includes(value.toLowerCase()) );
    this.tagfilter = value;
  }

}
