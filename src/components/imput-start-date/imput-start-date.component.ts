import { Component, OnInit } from '@angular/core';
import { QuarantineService} from '../../services/quarantine.service';

@Component({
  selector: 'app-imput-start-date',
  templateUrl: './imput-start-date.component.html',
  styleUrls: ['./imput-start-date.component.css']
})
export class ImputStartDateComponent implements OnInit {

  constructor(protected quarantine: QuarantineService) { }

  ngOnInit() {
  }

}