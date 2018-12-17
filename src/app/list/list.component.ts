import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { OtherDataService } from "../other-data.service";
import { LogDebugger } from "../log-debugger.service";
import { ConsoleService } from "../console.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [
    ConsoleService,
    { provide: DataService, useClass: OtherDataService },
    {
      provide: LogDebugger,
      useFactory: consoleService => new LogDebugger(consoleService, true),
      deps: [ConsoleService]
    },
    {
      provide: "apiUrl",
      useValue: "http://localhost:4200/api"
    }
  ]
})
export class ListComponent implements OnInit {
  items: Array<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }
}
