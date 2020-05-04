import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BannersService } from 'app/service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {

    constructor(private service: BannersService) { }

    ngOnInit(): void {
        this.getAll()
    }
    banner: any;
    getAll() {
      this.banner = [];
      this.service.getBanners().subscribe(r => {
        this.banner = r['data']['0'];
        console.log('All banner:',this.banner);
      })
    }

}
