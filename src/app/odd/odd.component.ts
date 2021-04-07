import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-odd",
  template: ` <p *ngIf="this.count % 2 !== 0">{{ count }}</p> `,
  styleUrls: ["./odd.component.css"],
})
export class OddComponent implements OnInit {
  @Input() count: number;
  constructor() {}

  ngOnInit(): void {}
}
