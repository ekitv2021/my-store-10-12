import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{ 

  //injecting the instance of the ProductService
  //as we want to use the methods and variables
  //declared in the Service class
  constructor(private ps:ProductService){}

  errorMessage = null

  ngOnInit(): void {
      this.ps.getProducts().subscribe({
        next: val => {
                this.products = val
                this.filteredProducts = val
        },
        error: err => {
          // console.log(err)
          this.errorMessage = err
        }
      })
  }

  showImage = true

  name = "product-list component"

  titleText = 'Click Here'
  altText = "Image Does Not Exists"

  imgStyle = {
    'width.px': 180,
    'height.px': 150
  }

  nameStyle = {
    'fontSize.px': 30,
    'fontStyle': 'italic',
    color: 'yellowgreen'
  }

  priceStyle = {
    'fontWeight': 'bold'
  }

  customClass = {
    'custom-style1':false,
    'custom-style2':true
  }

  // product = {
  //   id: 1,
  //   name: "one plus nord 2",
  //   price: 40000,
  //   description: "phone"
  // }

  addToCart(event: MouseEvent, p: any, value?: number){
    // console.log(event.x)
    // console.log('added to cart: ' + p.name + "\nwith price: " + p.price)
    // console.log("value: " + value)
    this.ps.increment()
  }

  //Creating the array/list of the products
  products: Product[] = []

  //filteredProducts variable is the copy of the original products array
  filteredProducts = this.products

  filterProduct(searchValue: string){
    this.filteredProducts = this.products.filter(p => 
                              p.name.toLowerCase().includes(searchValue.toLowerCase()))
  }

  private _filterBy = ''

  //We will not bind _filterBy with the ngModel
  //We willl bind filterBy method name with the ngModel

  //used to read the value of the _filterBy variable
  get filterBy(): string{
    return this._filterBy
  }

  //used to set/change the value of the _filterBy variable 
  //with the input value
  set filterBy(value:string){
    this._filterBy = value
    this.filterProduct(this._filterBy)
  }
}
