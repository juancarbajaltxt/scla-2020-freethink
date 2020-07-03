import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then( m => m.ProgramsPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'program-description',
    loadChildren: () => import('./program-description/program-description.module').then( m => m.ProgramDescriptionPageModule)
  },
  {
    path: 'program-length',
    loadChildren: () => import('./program-length/program-length.module').then( m => m.ProgramLengthPageModule)
  },
  {
    path: 'user-name',
    loadChildren: () => import('./user-name/user-name.module').then( m => m.UserNamePageModule)
  },
  {
    path: 'complete',
    loadChildren: () => import('./complete/complete.module').then( m => m.CompletePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
