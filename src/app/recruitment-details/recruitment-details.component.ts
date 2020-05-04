import { Component, OnInit } from '@angular/core';
import { BannersService } from 'app/service';

@Component({
  selector: 'app-recruitment-details',
  templateUrl: './recruitment-details.component.html',
  styleUrls: ['./recruitment-details.component.css']
})
export class RecruitmentDetailsComponent implements OnInit {

  constructor(private service: BannersService) { }

  ngOnInit(): void {
  }
  // banner: any;
  // getAll() {
  //   this.banner = [];
  //   this.service.getBanners().subscribe(r => {
  //     this.banner = r['data'];
  //     console.log('All banner:',this.banner);
  //   })
  // }
}
