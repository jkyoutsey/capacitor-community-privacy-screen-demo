import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'privacy-screen',
    pathMatch: 'full',
  },

  {
    path: 'privacy-screen',
    loadChildren: () =>
      import('./modules/privacy-screen/privacy-screen.module').then(
        m => m.PrivacyScreenPageModule,
      ),
  },

  {
    path: '**',
    redirectTo: 'privacy-screen',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
