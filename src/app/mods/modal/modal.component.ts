import { Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close=new EventEmitter();
  // element ref used with DI gives access to the host element of the component
  constructor(private el:ElementRef) { 
    
  }

  // linked with the body component
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  // it will destroy modal component when u navigate away from it
  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
