import { Component } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

@Component({
  selector: "app-light-switch",
  template: "mock",
})
export class MockLightSwitchComponent {}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockLightSwitchComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
