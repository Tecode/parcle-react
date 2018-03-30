import React, { Component } from "react";
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/take';


export default class Parent extends Component {
  componentDidMount() {
    var letters = Observable.of('a', 'b', 'c');
    var result = letters.mergeMap(x =>
      Observable.interval(10000).map(i => x+i)
    );
    result.subscribe(x => console.log(x));
    const ob1 = Observable.interval(1000).map(d => `ob1:${d}`).take(3);
    const ob2 = Observable.interval(2000).map(d => `ob2:${d}`).take(2);

    Observable.forkJoin([ob1, ob2]).subscribe((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <input />
      </div>
    );
  }
}