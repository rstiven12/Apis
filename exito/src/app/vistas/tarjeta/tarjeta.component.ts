import { Component,   OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})


export class TarjetaComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  get isActive() {
    return this.activatedRoute.snapshot.url.toString() === '/tarjeta';
  }

  onClick() {
    this.router.navigate(['/tarjeta']);
  }

}
