import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-even",
  template: ` <p *ngIf="this.count % 2 === 0">{{ count }}</p> `,
  styleUrls: ["./even.component.css"],
})
export class EvenComponent implements OnInit {
  @Input() count: number;
  constructor() {}

  ngOnInit(): void {}
}
