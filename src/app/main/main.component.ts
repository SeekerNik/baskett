import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

interface Groceries {
  p_id: number;
  p_name: string;
  p_cost: number;
  p_availability: number;
  p_details?: string;
  p_category?: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  searchData!: string;
  groceries: Groceries[] = data;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const jsonData = data.filter(
      (product: any) => product['p_category'] == this.searchData
    );
    alert(JSON.stringify(jsonData));
  }
}
