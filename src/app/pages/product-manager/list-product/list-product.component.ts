import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent  {

  settings = {
    // selectMode: 'multi',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    look: {
      radioButtonContent: '<i class="nb-trash"></i>',
      // confirmDelete: true,
    },


  columns: {

    id: {
      title: 'ID',
      type: 'number',
    },
    hovaten : {
      title: 'Tên hàng',
      type: 'string',
    },
    hinhanh : {
      title: 'Ngày lập',
      type: 'string',
    },
    vaitro  : {
      title: 'Giá',
      type: 'string',
    },
    diachi : {
      title: 'Thời hạn',
      type: 'string',
    },
    dienthoai : {
      title: 'Loại hàng',
      type: 'number',
    },
    email: {
      title: 'Người bán',
      type: 'string',
    },
  }
};

source: LocalDataSource = new LocalDataSource();

constructor(private service: SmartTableData) {
  const data = this.service.getData();
  this.source.load(data);
}

onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}

}
