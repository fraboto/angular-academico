import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClase]'
})
export class ClaseDirective implements OnInit {

  @Input('appClase') clase:string = '';

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit()
  {
    var a = this.clase.substr(0,3);
    switch (a)
    {
      case 'MAT':
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
        break;
      case 'CIV':
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightsalmon');
        break;
      case 'QMC':
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightyellow');
        break;
      case 'BIO':
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
        break;
      default:
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
        break
    }
  }

}
