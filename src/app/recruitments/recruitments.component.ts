import { Component, OnInit } from '@angular/core';
import { BannersService } from '../service'

@Component({
  selector: 'app-recruitments',
  templateUrl: './recruitments.component.html',
  styles: [`
  ngb-progressbar {
      margin-top: 5rem;
  }
  `]})
export class RecruitmentsComponent implements OnInit {

  constructor(private service: BannersService) { }

  ngOnInit(): void {
  }
  banner: any;
  getAll() {
    this.banner = [];
    this.service.getBanners().subscribe(r => {
      this.banner = r['data'];
      console.log('All banner:',this.banner);
    })
  }

}
