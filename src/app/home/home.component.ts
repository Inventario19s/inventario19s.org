import { Component, OnInit } from '@angular/core';
import { Converter } from 'showdown/dist/showdown';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  readme;

  constructor(private http: Http) { }

  ngOnInit() {

    this.http
    .get('https://raw.githubusercontent.com/Inventario19s/googlesheets/master/README.md', {})
    .subscribe((res: Response) => {
      const converter = new Converter();
      this.readme = converter.makeHtml(res.text());
      console.log(this.readme);
    });

    // const converter = new Converter();
    // this.readme = converter.makeHtml(title);
  }

}
