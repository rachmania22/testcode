import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-from-edit-tabungan',
  templateUrl: './from-edit-tabungan.component.html',
  styleUrls: ['./from-edit-tabungan.component.css']
})
export class FromEditTabunganComponent implements OnInit {

  constructor(private route: ActivatedRouter, private apiService: ApiService, private Location: Location) { }

  ngOnInit() {
  this.route.paramMap.subcribe(params=> { 
  this.id = params.get('id');
  this.findTabungan();
   });
  }

  private findTabungan() {
    return this.apiService.findTabungan(this.id).subcribe((data) =>{
    const tabungan=data.values[0];
    document.getElementryById('no_rek').value=tabungan.no_rekening;
    document.getElementryById('nama').value=tabungan.nama;
    document.getElementryById('alamat').value=tabungan.alamat;
   document.getElementryById('no_tel').value=tabungan.no_telepon;
  });
  }

  private updateTabungan() {
  const data = {
  id: this.id,
  no_rekening: document.getElementById('no_rek').value,
      nama: document.getElementById('nama').value,
      alamat: document.getElementById('alamat').value,
      no_telepon: document.getElementById('no_tel').value
  };
    return this.apiService.updateTabungan(data).subscribe(response => {
    console.log(response);
    location.reload();
  });
 }

}
