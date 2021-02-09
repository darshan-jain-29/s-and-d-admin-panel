import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {OrderDetailService, OrderService} from '../../../shared/services/firebase-api';
import {OrderModel, PageDataService} from '../../../shared';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  @Input() data: any;

  constructor(private modal: NzModalRef) {
  }

  ngOnInit() {
  }

  onClose() {
    this.modal.close(true);
  }

}
