import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-sold',
  templateUrl: './products-sold.component.html',
  styleUrls: ['./products-sold.component.css']
})
export class ProductsSoldComponent implements OnInit {

  products = [
    {
      name: 'Uniqlo T-shirt airism',
      stocks: 12245,
      price: 10.50,
      sales: 8983,
      earnings: 1933984,
      growth: '+8.32%',
      image: 'path/to/tshirt.jpg'
    },
    {
      name: 'Uniqlo Cargo pants',
      stocks: 8463,
      price: 24.00,
      sales: 1293,
      earnings: 243394,
      growth: '+8.32%',
      image: 'path/to/cargo.jpg'
    },
    {
      name: 'Club 1989 basic hoodies',
      stocks: 24432,
      price: 46.80,
      sales: 120,
      earnings: 96593,
      growth: '+8.32%',
      image: 'path/to/hoodie.jpg'
    },
    {
      name: 'Humblezing backpack',
      stocks: 19498,
      price: 105.24,
      sales: 4425,
      earnings: 1489493,
      growth: '+8.32%',
      image: 'path/to/backpack.jpg'
    },
    {
      name: 'Midjune thermo tumbler',
      stocks: 10953,
      price: 20.50,
      sales: 6392,
      earnings: 558494,
      growth: '+8.32%',
      image: 'path/to/tumbler.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
