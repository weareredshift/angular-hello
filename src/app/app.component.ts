import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private amplifyService: AmplifyService ) {
    var api = this.amplifyService.api();

    api.get('transcribble', '/projects', {})
      .then(response => {
        this.projects = response;
      }).catch(err => {
        console.log('ERR', err);
      });
  }
  projects = [];
  title = 'something something';
}
