import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBukuTabunganComponent} from './data-buku-tabungan/data-buku-tabungan.component';
import { FormBukuTabunganComponent} from './form-buku-tabungan/form-buku-tabungan.component';

const routes: Routes = [
	{
	path: '',
	component:
		DataBukuTabunganComponent,
	},
	{
		path: 'add-data',
	component:
		FormBukuTabunganComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
