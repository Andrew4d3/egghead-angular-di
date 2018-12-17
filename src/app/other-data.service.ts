import { LogDebugger } from "./log-debugger.service";
import { Injectable, Inject } from "@angular/core";
import { BASE_URL } from "./app.tokens";

@Injectable()
export class OtherDataService {
  constructor(
    private logDebugger: LogDebugger,
    @Inject(BASE_URL) private apiUrl
  ) {}

  items: Array<any> = [
    { id: 0, name: "Person", country: "country" },
    { id: 1, name: "Person", country: "country" },
    { id: 2, name: "Person", country: "country" }
  ];

  getItems() {
    this.logDebugger.debug(`Getting items... from ${this.apiUrl}`);
    return this.items;
  }
}
