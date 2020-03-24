import { Component, OnInit } from '@angular/core';
import { faCoffee,faHeart ,faArrowDown,faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCoffee = faCoffee; faHeart = faHeart; faChevronDown=faChevronDown;
  constructor() { }

  ngOnInit(): void {
  }

}
