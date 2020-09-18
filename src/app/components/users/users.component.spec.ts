import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UserService } from "src/app/services/user.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { User } from "../../interfaces/user";

import { UsersComponent } from "./users.component";

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;
  let http: HttpTestingController;

  const dummyUsers: User[] = [
    {
      name: "dummy",
      email: "dummy@email.com",
    },
    {
      name: "dummy2",
      email: "dummy2@email.com",
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService],
    }).compileComponents();

    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("loads the users and displays them if user clicks on button", () => {
    // acquire services and set up spies

    spyOn(userService, "get").and.callThrough();

    // click on Load button
    const button = fixture.nativeElement.querySelector("#load");
    button.click();

    // validate outgoing request to API and provide dummy data
    expect(userService.get).toHaveBeenCalled();

    expect(fixture.componentInstance.users$).toBeTruthy();

    fixture.detectChanges();

    const testRequest = http.expectOne(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(testRequest.request.method).toEqual("GET");
    testRequest.flush(dummyUsers);

    // validate presentational changes
    fixture.detectChanges();

    const listItems = fixture.nativeElement.querySelectorAll("li");
    expect(listItems.length).toEqual(dummyUsers.length);
  });
});
