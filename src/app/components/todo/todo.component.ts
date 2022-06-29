import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() todoCompleted = new EventEmitter<Todo>();
  @Output() todoDeleted = new EventEmitter<Todo>();
  @Output() todoEdited = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
    // const newTodo: Todo = {
    //   name: '',
    //   creationDate:1,
    //   priority:1,
    //   tags:[]
    // }
  }

}
