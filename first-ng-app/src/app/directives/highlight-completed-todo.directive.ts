import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  ele = inject(ElementRef);
  
  // similar to useffect
  styleEffects = effect(()=>{
    if(this.isCompleted()){
      this.ele.nativeElement.style.textDecoration = "line-through";
      this.ele.nativeElement.style.backgroundColor = "#d3f9d8";
      this.ele.nativeElement.style.color = "#6c757d";
    }
    else{
      this.ele.nativeElement.style.textDecoration = "none";
      this.ele.nativeElement.style.backgroundColor = "#fff";
      this.ele.nativeElement.style.color = "#000";
    }
  })

}
