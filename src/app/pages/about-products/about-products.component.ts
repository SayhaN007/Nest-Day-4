import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-about-products',
  imports: [],
  templateUrl: './about-products.component.html',
  styleUrl: './about-products.component.scss'
})
export class AboutProductsComponent {
  constructor(private activated: ActivatedRoute, private api: ApiService) { }
  product: any;
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get("id");

    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
      

    });
  }

}
