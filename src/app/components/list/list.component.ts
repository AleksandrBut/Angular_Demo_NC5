import {Component, OnInit} from '@angular/core';
import {MyServiceService} from '../../service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public names: any = [];

  constructor(private myServiceService: MyServiceService) {
  }

  ngOnInit() {
    this.handleGetNames();
  }

  public handleGetNames() {
    this.myServiceService.getNames().subscribe((names) => {
      this.names = names;
    });
  }
}
