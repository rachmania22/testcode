import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-buku-tabungan',
  templateUrl: './form-buku-tabungan.component.html',
  styleUrls: ['./form-buku-tabungan.component.css']
})
export class FormBukuTabunganComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  public createTabungan() {
  	const tabungan = {
  		no_rekening: document.getElementById('no_rek').value,
  		nama: document.getElementById('no_rek').value,
  		alamat: document.getElementById('no_rek').value,
  		no_telepon: document.getElementById('no_rek').value
  	};

  	this.apiService.createTabungan(tabungan).subscribe((response) => {
  		console.log(response);
  		this.router.navigate(['']);
  	});
  }
}
