import { Component, OnInit} from '@angular/core';
import { TrabajosService } from '../trabajos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-job',
  templateUrl: './send-job.component.html',
  styleUrls: ['./send-job.component.css']
})
export class SendJobComponent implements OnInit {
  constructor(private trabajos:TrabajosService,private router:Router) { }
  
  ngOnInit() {
  }
  addJob(imagen,titulo,desc){
    this.trabajos.addJob({'title':titulo,'image':imagen,'desc':desc});
    this.router.navigateByUrl('jobs');
  }
}
