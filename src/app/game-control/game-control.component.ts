import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-control",
  template: `
    <button (click)="interval()">Start</button>
    <button (click)="stop()">Stop</button>
    <p *ngIf="this.count !== 0">
      <app-even [count]="this.count"></app-even>
      <app-odd [count]="this.count"></app-odd>
    </p>
  `,
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  message: any;
  count = 0;
  clear: any;

  interval() {
    this.clear = setInterval(() => {
      this.message = this.count += 1;
    }, 500);
  }

  stop() {
    console.log("stop clicked");
    clearInterval(this.clear);
  }

  constructor() {}

  ngOnInit(): void {}
}
