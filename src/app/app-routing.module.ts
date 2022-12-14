import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'episodios',
    loadChildren: () => import('./pages/episodios/episodios.module').then( m => m.EpisodiosPageModule)
  },
  {
    path: 'ubicaciones',
    loadChildren: () => import('./pages/ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
