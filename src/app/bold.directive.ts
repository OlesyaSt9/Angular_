import {Directive, HostListener, Output, Input, ElementRef, EventEmitter } from '@angular/core';
 
@Directive({
    selector: '[PrintWeather]'
    
})
export class BoldDirective{
    @Input() wheather_d="";
    @Output() wheather_out = new EventEmitter<string>();
 
      constructor(private elementRef: ElementRef){     
       //this.elementRef.nativeElement.style.fontWeight = "bold";       
    }



    @HostListener("mouseover") onMouseLeave() {
        console.log('обработано');   
        this.wheather_out.emit(this.wheather_d);
    }
}