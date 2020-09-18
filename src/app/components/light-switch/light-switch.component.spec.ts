import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LightSwitchComponent } from "./light-switch.component";

describe("LightSwitchComponent", () => {
  let component: LightSwitchComponent;
  let fixture: ComponentFixture<LightSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LightSwitchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("#clicked() should toggle #isOn", () => {
    expect(component.isOn).toBe(false, "off at first");
    component.clicked();
    expect(component.isOn).toBe(true, "on after click");
    component.clicked();
    expect(component.isOn).toBe(false, "off after second click");
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i, "off at first");
    component.clicked();
    expect(component.message).toMatch(/is on/i, "on after clicked");
  });
});
