import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmp-item-header',
  templateUrl: './cmp-item-header.component.html',
  styleUrls: ['./cmp-item-header.component.css']
})
export class CmpItemHeaderComponent implements OnInit {
  @Input() private titulo:String;
  constructor() { 
    this.titulo="Titulo";
  }

  ngOnInit() {
  }

}
