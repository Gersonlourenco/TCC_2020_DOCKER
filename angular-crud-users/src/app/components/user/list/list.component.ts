import { Observable } from "rxjs";
import { User } from '../../../models/user/user';
import { UserService } from '../../../services/user/user.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private UserService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.UserService.getUserList();
  }

  deleteUser(id: number) {
    this.UserService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  userUpdate(id: number) {
    this.router.navigate(['update', id]);
  }
}
