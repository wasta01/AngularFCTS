import { Component, OnInit, Input } from '@angular/core';
import { CmpItemViewComponent } from '../cmp-item-view/cmp-item-view.component';
import { TrabajosService } from '../trabajos.service';

@Component({
  selector: 'app-cmp-view',
  templateUrl: './cmp-view.component.html',
  styleUrls: ['./cmp-view.component.css']
})
export class CmpViewComponent implements OnInit {
  private items:Array<object>;
  constructor(private trabajos:TrabajosService) { 
    this.items=trabajos.getJobs();
  }

  ngOnInit() {
  }

}