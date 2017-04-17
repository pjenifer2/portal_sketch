import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
 
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductDetailGuard } from './products/product-guard.service';
import { StarComponent } from './shared/star.component';

import { ModalModule } from 'ng2-modal';

import { ProductNestComponent } from './products/product-nest.component';




@NgModule({
  imports: [  BrowserModule, 
              FormsModule, 
              HttpModule,
              RouterModule.forRoot([
                { path: 'products', component: ProductListComponent },
                { path: 'nest', component: ProductNestComponent} ,
                { path: 'product/:id', 
                  canActivate: [ ProductDetailGuard ],
                  component: ProductDetailComponent },
                { path: 'welcome', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                
              ]),
              ModalModule
              
              
           
   ],
  declarations: [ AppComponent, 
                  ProductListComponent, 
                  ProductFilterPipe, 
                  StarComponent, 
                  ProductDetailComponent, 
                  WelcomeComponent,
                  ProductNestComponent ],
  
  providers: [ ProductDetailGuard ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
