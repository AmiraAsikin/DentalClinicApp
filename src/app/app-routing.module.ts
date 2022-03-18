import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
   
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'treatment',
    loadChildren: () => import('./treatment/treatment.module').then( m => m.TreatmentPageModule)
  },
  {
    path: 'crown',
    loadChildren: () => import('./crown/crown.module').then( m => m.CrownPageModule)
  },
  {
    path: 'whitening',
    loadChildren: () => import('./whitening/whitening.module').then( m => m.WhiteningPageModule)
  },
  {
    path: 'braces',
    loadChildren: () => import('./braces/braces.module').then( m => m.BracesPageModule)
  },
  {
    path: 'denture',
    loadChildren: () => import('./denture/denture.module').then( m => m.DenturePageModule)
  },
  {
    path: 'extraction',
    loadChildren: () => import('./extraction/extraction.module').then( m => m.ExtractionPageModule)
  },
  {
    path: 'scaling',
    loadChildren: () => import('./scaling/scaling.module').then( m => m.ScalingPageModule)
  },
  {
    path: 'fillings',
    loadChildren: () => import('./fillings/fillings.module').then( m => m.FillingsPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'view-book',
    loadChildren: () => import('./view-book/view-book.module').then( m => m.ViewBookPageModule)
  },
  {
    path: 'edit-book',
    loadChildren: () => import('./edit-book/edit-book.module').then( m => m.EditBookPageModule)
  },
  {
    path: 'edit-book/:id',
    loadChildren: () => import('./edit-book/edit-book.module').then( m => m.EditBookPageModule)
},
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
