import { Component, OnInit } from '@angular/core';

import { HelmApiControllerService } from '../app/shared/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blokes Dashboard';

  constructor(private helmApi: HelmApiControllerService) {}

  ngOnInit() {
    // test Helm API
    this.helmApi.listGet().subscribe((result: String) => {
      console.log(result);
    });
  }
}
