import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {RecipeService} from '../recipe.service';
import {AuthService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthGuardService} from '../auth/auth-guard.service';
import {ShoppingListService} from '../shopping-list.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService]
})
export class CoreModule { }
