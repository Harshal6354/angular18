import { Routes } from '@angular/router';
import { Data2Component } from './data2/data2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { New1Component } from './new1/new1.component';
import { RsFormComponent } from './rs-form/rs-form.component';
import { ApiComponent } from './api/api.component';
import { PipeComponent } from './pipe/pipe.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { LayoutComponent } from './layout/layout.component';
import { guard2Guard } from './guard/guard2.guard';
import { ApiPostComponent } from './api-post/api-post.component';
import { viewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { LifecylceComponent } from './lifecylce/lifecylce.component';
import { TemplateComponent } from './template/template.component';
import { ForReuseComponent } from './for-reuse/for-reuse.component';
import { AnimationComponent } from './animation/animation.component';
import { SignalsComponent } from './signals/signals.component';
import { PaymentComponent } from './payment/payment.component';
export const routes: Routes = [    
{
   path:'',
   redirectTo:'login',
   pathMatch:'full'
},
{   
path:'login',
component:LogincompComponent,

},
{
 path:'',
 component:LayoutComponent,
 children:[
    {
        path:'add-data2',
        component:Data2Component,          
    },
    {
       path:'data-bind',
        component:DataBindingComponent,
        canActivate:[guard2Guard]
    },
    {
        path:'add-comp',
        component:AddcomponentComponent,
        canActivate:[guard2Guard]
    },
    {
        path:'new1-comp',
        component:New1Component
    },
    {
        path:'rsform',
        component:RsFormComponent,
        
    },
    {
        path:'api-comp',
        component:ApiComponent
    },
    {
        path:'pipe-comp',
        component:PipeComponent
    },
    {
        path:'data2',
        component:Data2Component
    }, 
    {
        path:'api-post',
        component:ApiPostComponent
    },
    {
        path:'api-view',
        component:ViewchildComponent
 },
 {
    path:'lifecycle',
    component:LifecylceComponent
 },
 {
    path:'template',
    component:TemplateComponent
 },
 {
    path:'for-reuse',
    component:ForReuseComponent
 },{
    path:'animation',
    component:AnimationComponent
 }
 ,{
    path:'signal',
    component:SignalsComponent
 }
 ,{
    path:'payment',
    component:PaymentComponent
 }
 
 ]
}];
