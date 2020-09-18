import { Component } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

@Component({
  selector: "app-users",
  template: "mock",
})
export class MockUsersComponent {}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockUsersComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
