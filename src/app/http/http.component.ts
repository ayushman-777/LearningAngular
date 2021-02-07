import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {ExcelServicesService} from '../services/excel-services.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  loadedPosts = [];
  excel = [];
  constructor(private excelService: ExcelServicesService, private http: HttpClient, private authService: AuthService) {
  }

  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.excel, 'sample');
  }

  exportNewAsXLSX() {
    this.excelService.generateExcel().then();
  }

  ngOnInit(): void {
  }

  onClearPosts() {
    this.http.delete('https://learing-angular-default-rtdb.firebaseio.com/posts.json').subscribe(() => this.loadedPosts = []);
  }

  onFetchPosts() {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get('https://learing-angular-default-rtdb.firebaseio.com/posts.json',
        {
          params: new HttpParams().set('auth', user.token)
        });
    }), map(responseData => {
      const postArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...responseData[key], id: key});
        }
      }
      return postArray;
    })).subscribe(posts => {
      this.loadedPosts = posts;
      console.log(posts);
      this.excel = this.loadedPosts;
    });
  }

  onCreatePost(postData: { tittle: string, content: string }) {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.post('https://learing-angular-default-rtdb.firebaseio.com/posts.json', postData,
        {
          params: new HttpParams().set('auth', user.token)
        });
    })).subscribe((response) => console.log(response));
  }
}
