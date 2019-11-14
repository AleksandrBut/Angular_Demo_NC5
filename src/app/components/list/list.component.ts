import {Component, OnInit} from '@angular/core';
import {MyServiceService} from '../../service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todos: any = [];

  constructor(private myServiceService: MyServiceService) {
  }

  ngOnInit() {
    this.handleGetTodos();
  }

  public handleGetTodos() {
    this.myServiceService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
