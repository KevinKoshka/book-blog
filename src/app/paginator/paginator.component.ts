import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { ObService } from '../ob-service.service';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  currentTitle: string;
  currentOrder: number;
  currentPages: number;

  nextId: string;

  subscription: Subscription;

  button = {
    nextDisabled: false,
    previousDisabled: false
  }

  private disableOrEnableButtons() {
    if((this.currentOrder === this.currentPages - 1) && !this.button.nextDisabled) {
      this.button.nextDisabled = true;
    } else if(this.button.nextDisabled) {
      this.button.nextDisabled = false;
    }
    if((this.currentOrder === 0) && !this.button.previousDisabled) {
      this.button.previousDisabled = true;
    } else if(this.button.previousDisabled) {
      this.button.previousDisabled = false;
    }
  }

  onPageTurn(where: number) {
    let nextId: string | Error = this.dataService.getArticleByOrder(this.currentTitle, this.currentOrder + where);
    if(typeof nextId === 'string') {
      this.nextId = nextId;
      this.router.navigate(['articles', this.nextId]);
    } else if(nextId instanceof Error) {
      this.router.navigate(['articles', 'articleNotFound']);
    }
    
  }

  constructor(
    private obService: ObService,
    private dataService: DataService,
    private router: Router
  ) {
    //Toma la data cuando hay cambio de página.
    this.subscription = obService.clickedPage$.subscribe(
      article => {
        this.currentOrder = article.order;
        this.currentTitle = article.title;
        this.currentPages = article.pages;
        this.disableOrEnableButtons();
      }
    );
  }

  ngOnInit() {
  }

}
