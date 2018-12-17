import { LogDebugger } from "./log-debugger.service";
import { Injectable } from "@angular/core";

@Injectable()
export class OtherDataService {
  constructor(private logDebugger: LogDebugger) {}

  items: Array<any> = [
    { id: 0, name: "Person", country: "country" },
    { id: 1, name: "Person", country: "country" },
    { id: 2, name: "Person", country: "country" }
  ];

  getItems() {
    this.logDebugger.debug("Getting items...");
    return this.items;
  }
}
