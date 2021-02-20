import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then( m => m.SingupPageModule)
  },
  {
    path: 'pain',
    loadChildren: () => import('./pain/pain.module').then( m => m.PainPageModule)
  },
  {
    path: 'medicament',
    loadChildren: () => import('./medicament/medicament.module').then( m => m.MedicamentPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
