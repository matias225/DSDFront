import { Component, OnInit } from '@angular/core';
import { StockForm } from './stock-form'
1
@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  model: StockForm = {code: 1, description: '', price: 0, stock: 0, img_path: ''}
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.model);
  }

}
