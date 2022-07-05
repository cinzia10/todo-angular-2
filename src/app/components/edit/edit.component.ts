import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data.service';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public todo: Todo = {
    name: '',
    creationDate: -1,
    tags: [],
    priority: 0,
  };

  public id: string | null = '';
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  showTicks = true;
  autoTicks = true;
  tickInterval = 1;

  constructor(
    private dataS: DataService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.id = this.data.id;
    }
    if (this.id) {
      this.dataS.getTodoById(this.id).subscribe({
        next: (t) => {
          if (t) {
            this.todo = t;
          }
        },
        error: (err) => console.log(err),
      });
    }
  }

  convertTags(tagsString: string) {
    return tagsString.toLowerCase().split(' ');
  }

  saveTodo() {
    if (this.todo.creationDate === -1) {
      this.todo.creationDate = new Date().getTime() / 1000;
    }

    if (this.todo.priority < 0) {
      this.todo.priority = 0;
    }

    if (this.todo.priority > 3) {
      this.todo.priority = 3;
    }

    this.dataS.saveTodo(this.todo);
    this.dialogRef.close();
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log(value)
    if (value) {
      this.todo.tags.push(value);
    }
    event.chipInput!.clear();
    console.log(this.todo.tags)
  }

  remove(tag: any): void {
    const index = this.todo.tags.indexOf(tag);
    if (index >= 0) {
      this.todo.tags.splice(index, 1);
    }
  }

  priorityString(value:number){
    switch(value){
      case 0:
        return 'bassa'
        default:
          return 'completato'
    }
  }

  getSliderTickInterval(): number | "auto" {
    if(this.showTicks) {
      return this.autoTicks? "auto":this.tickInterval
    }
    return 0
  }


}



