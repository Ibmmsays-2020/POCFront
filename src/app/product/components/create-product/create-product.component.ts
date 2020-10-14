import { CategoryService } from './../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductServicesService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form;
  items: Array <any>;
  imageUrl = '../../../assets/img/defalut-image.jpeg';
  fileToUpload: File = null;
   constructor(private FB: FormBuilder , private productServicesService: ProductServicesService, private categoryService: CategoryService) {
   this.categoryService.Get().subscribe(
    res => this.items = res
  );
    }


  ngOnInit(): void {
    this.form = this.FB.group(
      {
        name: this.FB.control(''),
        price : this.FB.control(''),
        quntity: this.FB.control(''),
        uploadImage: this.FB.control(''),
        category: this.FB.control('')
      }

     );
  }
  onSubmit(): void{
        console.log(this.form.value);
        this.productServicesService.create(this.form.value).subscribe(
      res => console.log(res)
    );
        console.log(this.fileToUpload);
    }
    // tslint:disable-next-line: typedef
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
      reader.readAsDataURL(this.fileToUpload);
      console.log(this.fileToUpload);
    }
}
