import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  loading: boolean = true;
  public product?: Products
 
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService)
  private _router = inject(Router)

ngOnInit(): void {
  
  this._route.params.subscribe(params => {
    this._apiService.getProduct(params['id']).subscribe(( data: Products )=>{
    this.product = data; 
    this.loading = false; 
    }
  )
})
}

navigate(path: string ): void {
  this._router.navigate(['products'])
}

}
