import { Component, OnInit } from '@angular/core';
import { faHouseUser, faPhone, faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    faHouseUser = faMapMarked;
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    test : Date = new Date();

    constructor() { }

    ngOnInit() {}
}
