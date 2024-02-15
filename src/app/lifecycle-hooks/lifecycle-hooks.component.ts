import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { toHTML } from 'ngx-editor';

import jsonDoc from './doc';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked {
  constructor(public util: UtilityService) {
    // this.doSomething();
  }

  doSomething() {
    // console.log("Something is done");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("This is on change");
  }


  ngAfterContentChecked(): void {
    // console.log("This is the ng on ngAfterContentChecked");    

  }

  ngDoCheck(): void {
    // console.log("This is the ng on ngDoCheck");    

  }

  ngAfterContentInit(): void {
    // console.log("This is the ng on ngAfterContentInit");    

  }

  ngAfterViewChecked(): void {
    // console.log("This is the ng on ngAfterViewChecked");    

  }

  ngAfterViewInit(): void {
    // console.log("This is the ng on ngAfterViewInit");    

  }


  login() {
    localStorage.setItem('token', 'test');
  }

  logout() {
    localStorage.removeItem('token')
  }

  editordoc = jsonDoc;

  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl {
    return this.form.get('editorContent');
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }



  htmlValue: string = ''
  submit() {
    this.htmlValue = toHTML(this.doc.value);

    console.log(this.doc );
    
  }
}


