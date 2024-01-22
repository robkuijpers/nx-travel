import { Route } from '@angular/router';
import { BookComponent } from '../pages/book/book.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { OverviewComponent } from '../pages/overview/overview.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
    { path: 'overview', component: OverviewComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'book', component: BookComponent },
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];
