import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from '../comp-a/comp-a.component';
import { CompBComponent } from '../comp-b/comp-b.component';

const rt : Routes = [
  {component:CompAComponent, path:'a'},
  {component:CompBComponent, path:'b'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(rt)]
  ]
})
export class FirstModule { }
