import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faWhatsappSquare = faWhatsappSquare;
  faInstagramSquare = faInstagramSquare;
  faGithubSquare = faGithubSquare;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
