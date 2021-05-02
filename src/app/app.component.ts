import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'arch';

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    // this.afs.collection('testColl').snapshotChanges().subscribe(items => {
    //   console.log(items.map(item => item.payload.doc.data()));
    // });
  }
}
