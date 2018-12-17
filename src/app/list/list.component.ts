import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { OtherDataService } from "../other-data.service";
import { LogDebugger } from "../log-debugger.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [
    { provide: DataService, useClass: OtherDataService },
    { provide: LogDebugger, useFactory: () => new LogDebugger(true) }
  ]
})
export class ListComponent implements OnInit {
  items: Array<any>;

  constructor(
    private dataService: DataService,
    private logDebugger: LogDebugger
  ) {}

  ngOnInit() {
    this.logDebugger.debug("Getting items ...");
    this.items = this.dataService.getItems();
  }
}
