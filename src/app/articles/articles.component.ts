import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  constructor(private logger: NGXLogger) { }

  onClick() {
    this.logger.debug("Debug message");
    this.logger.info("Info message");
    this.logger.log("Default log message");
    this.logger.warn("Warning message");
    this.logger.error("Error message");
  }

  article1: object = {
    title: 'A Whole Planet on Modern Art',
    body:
      // tslint:disable-next-line:max-line-length
      'When it comes to Modern art, exactly whose Modernism is it?  In recent years, a newer, so-called transnational approach to telling this story has emerged. Its practitioners have been making room in 20th-century art’s familiar narrative, which usually focuses on Western Europe and North America, for lesser-known artists, movements, ideas and events from other parts of the world.',
    tag1: '19th Century',
    tag2: 'Monet',
    tag3: 'Renoir'
  };

  ngOnInit() {
  }

}
