import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'app/service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-articlec',
  templateUrl: './articlec.component.html',
  styleUrls: ['./articlec.component.css']
})
export class ArticlecComponent implements OnInit {

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }

  articles: any;
  articlesSelected: any;

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    
    this.getArticlesById(this.route.snapshot.params['id']);


    this.articlesService.getArticles().subscribe(r => {
      this.articles=[]
      this.articles = r['data']
      console.log('all', this.articles);

    }
    )
  }
  getArticlesById(id){
    this.articlesService.getArticleById(id).subscribe(r => {
      this.articlesSelected=[]
      this.articlesSelected = r['data']
      console.log('selected', this.articlesSelected);
      
    })
  }

}
