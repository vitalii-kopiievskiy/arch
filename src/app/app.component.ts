import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'arch';

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    // this.afs.collection('testColl').snapshotChanges().subscribe(items => {
    //   console.log(items.map(item => item.payload.doc.data()));
    // });

    this.store.dispatch(new fromDictionaries.Read())
  }
}
