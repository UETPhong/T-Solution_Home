import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'app/service';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {


  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
      this.getAll()
  }
  articles: any;
  getAll() {
    this.articles = [];
    this.service.getArticles().subscribe(r => {
      this.articles = r['data'];
      console.log('All articles:',this.articles);
    })
  }
}
