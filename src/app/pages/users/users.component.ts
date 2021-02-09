import {Component, OnInit} from '@angular/core';
import {UserModel, UsersService, ModalService} from '../../shared';
import {NzModalService} from 'ng-zorro-antd';
import {UserInfoComponent} from './user-info/user-info.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sortName = '';
  sortValue = '';
  searchValue = '';
  allList: Array<UserModel> = [];
  list: Array<UserModel>;
  isLoading = false;

  constructor(private userService: UsersService,
              private modalService: ModalService,
              private mService: NzModalService) {

  }

  ngOnInit() {
    this.bindData();
  }

  bindData() {
    this.userService.getList().subscribe(result => {
      this.allList = result;
      this.list = this.allList;
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sort: { key: string; value: string }) {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search() {
    const data = this.allList.filter(d => d.displayName.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
    this.list = data.sort((a, b) => {
        return this.sortValue === 'ascend'
          // tslint:disable-next-line:no-non-null-assertion
          ? a[this.sortName!] <= b[this.sortName!] ? -1 : 1
          // tslint:disable-next-line:no-non-null-assertion
          : b[this.sortName!] > a[this.sortName!]
            ? 1
            : -1;
      }
    );
  }

  onView(data) {
    this.mService.create({
      nzTitle: 'User Info',
      nzContent: UserInfoComponent,
      nzComponentParams: {
        data
      }
    });
  }
}
