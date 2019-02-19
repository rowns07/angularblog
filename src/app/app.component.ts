import { Component } from '@angular/core';
import { SessionService } from './resources/services/session.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private sessionService: SessionService) {

    }

}
