import { Component } from "@angular/core";

@Component({
  selector: "app-light-switch",
  templateUrl: "./light-switch.component.html",
  styleUrls: ["./light-switch.component.sass"],
})
export class LightSwitchComponent {
  isOn = false;

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The lights is ${this.isOn ? "On" : "Off"}`;
  }
}
