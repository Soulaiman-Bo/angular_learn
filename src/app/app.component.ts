import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_Learn';
  data: any[] = [];

  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    // setTimeout(()=> {observer.error(new Error('something went wrong'))}, 3500)
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

  GetAsyncData() {
    // this.myObservable.subscribe((val: any) => {
    //   this.data.push(val);
    // },
    // (error)=>{
    //     alert(error.message)
    // },
    // ()=> {
    //     alert("All the data is Complete")
    // } );

    this.myObservable.subscribe({
      next: (val) => {
        this.data.push(val);
      },
      error(error) {
        alert(error.message);
      },
      complete() {
        alert('All the data is Complete');
      },
    });
  }
}
