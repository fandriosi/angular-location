import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent {
  housingLocactionList: HousingLocation[]=[]
  haousingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[]=[]
  constructor(){
    this.haousingService.getAllHousingLocation().then((housingLocactionList: HousingLocation[])=>{
        this.housingLocactionList=housingLocactionList;
        this.filteredLocationList=housingLocactionList;
    });
  }

  filterResulsts(text: string){
    if(!text) this.filteredLocationList = this.housingLocactionList;

    this.filteredLocationList = this.housingLocactionList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }
}
