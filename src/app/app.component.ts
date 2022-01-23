import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ac-observables';

  ngOnInit() {

    let planets = ['Mars','Jupiter','Earth'];

    // of example - all data
    let obsOf = of(planets); // all data
    obsOf.subscribe(console.log)

    console.log('----------------------------------')

    // from example - one by oone
    let obsFrom = from(planets); // one by one
    obsFrom.subscribe(console.log)

    console.log('----------------------------------')

    // unicast - each subscription to observable receives unique number
    let observable = new Observable(observer => {
      observer.next(Math.random());
    })

    observable.subscribe(console.log)
    observable.subscribe(console.log)
    observable.subscribe(console.log)

    console.log('----------------------------------')

    // multicast - each subscription to subject receives the same value
    // similiar to an event-emitter
    let subject = new Subject();
    subject.subscribe(console.log)
    subject.subscribe(console.log)
    subject.subscribe(console.log)
    subject.next(Math.random());
  }


}

