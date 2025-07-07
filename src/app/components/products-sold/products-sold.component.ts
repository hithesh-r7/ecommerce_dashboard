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
      stocks: '12,245',
      price: 10.50,
      sales: '8,983',
      earnings: '1,933,984',
      growth: '+8.32%',
      image: 'path/to/tshirt.jpg'
    },
    {
      name: 'Uniqlo Cargo pants',
      stocks: '8,463',
      price: 24.00,
      sales: '1,293',
      earnings: '243,394',
      growth: '+8.32%',
      image: 'path/to/cargo.jpg'
    },
    {
      name: 'Club 1989 basic hoodies',
      stocks: '24,432',
      price: 46.80,
      sales: 120,
      earnings: '96,593',
      growth: '+8.32%',
      image: 'path/to/hoodie.jpg'
    },
    {
      name: 'Humblezing backpack',
      stocks: '19,498',
      price: 105.24,
      sales: '4,425',
      earnings: '1,489,493',
      growth: '+8.32%',
      image: 'path/to/backpack.jpg'
    },
    {
      name: 'Midjune thermo tumbler',
      stocks: '10,953',
      price: 20.50,
      sales: '6,392',
      earnings: '558,494',
      growth: '+8.32%',
      image: 'path/to/tumbler.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
