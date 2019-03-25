import {Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    constructor(private el:ElementRef){
        this.el.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('mouseenter') onMaouseEnter(){
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMaouseLeave(){
        this.highlight('green');
    }

    private highlight(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}