import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { Love } from '../../love';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly url = 'http://localhost:8080/loveCalculator/calculateLove';
  loveObject: Love | undefined;
  waitActivation = false;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  sendRequest(val: any): void {
    this.waitActivation = true;
    this.httpClient.post<Love>(this.url, val).subscribe((res) => {
      console.log(res);
      this.waitActivation = false;
      this.loveObject = res;
    }, (err) => {
      console.error(err);
    });
  }

}
