import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public goalList: any[];
  public loadedGoalList: any[];
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection(`goals`).valueChanges()
      .subscribe(goalList => {
        this.goalList = goalList;
        this.loadedGoalList = goalList;
        console.log('Hell new');
    });
  }

  initializeItems(): void {
    this.goalList = this.loadedGoalList;
  }

  filterList(evt) {
    this.initializeItems();
  
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.goalList = this.goalList.filter(currentGoal => {
      if (currentGoal.goalName && searchTerm) {
        if (currentGoal.goalName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

}
