import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked{
  constructor(public util: UtilityService){
    // this.doSomething();
  }


  ngOnInit(): void {
    console.log("This is the ng on init");
    this.util.print();
  }

  doSomething(){
    // console.log("Something is done");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("This is on change");
  }



  ngOnDestroy(): void {
    // console.log("This is the ng on destroy");    
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
}
