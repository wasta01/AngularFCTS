import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-item-view',
  templateUrl: './cmp-item-view.component.html',
  styleUrls: ['./cmp-item-view.component.css']
})
export class CmpItemViewComponent implements OnInit {
  @Input() private imagen:string;
  @Input() private desc:String;
  @Input() private title:string;
  constructor() { 
    this.imagen=null;
    this.desc="Texto descriptivo de prueba";
    this.title="Titulo de prueba";
  }

  ngOnInit() {
  }

}
