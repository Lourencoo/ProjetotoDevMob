import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./conteudo/conteudo.module').then( m => m.ConteudoPageModule)
  },
  {
    path: 'trocarsenha',
    loadChildren: () => import('./trocarsenha/trocarsenha.module').then( m => m.TrocarsenhaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
