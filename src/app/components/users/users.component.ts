import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.sass"],
})
export class UsersComponent {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {}

  load() {
    this.users$ = this.userService.get();
  }
}
