import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() newProduct = new EventEmitter<Product>()
  product:Product = {
    name: '',
    img: '',
    price: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.newProduct.emit(this.product)
    this.product = {
      name: '',
      img: '',
      price: 0
    }
  }

}
