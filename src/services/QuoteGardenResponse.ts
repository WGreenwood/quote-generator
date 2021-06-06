import { AxiosResponse } from "axios";
import Quote from "./Quote";

export class QuoteGardenResponse {
  statusCode: number;
  success: boolean;
  quote: Quote;

  constructor(response: AxiosResponse<string>, id: number) {
    const json = JSON.parse(response.data);
    this.statusCode = json['statusCode'];
    this.success = this.statusCode == 200;
    if (this.success) {
      var quoteJson = json['data'][0];
      this.quote = new Quote(id, quoteJson['quoteText'], quoteJson['quoteAuthor'], quoteJson['quoteGenre']);
    }
    else
      this.quote = new Quote(-1, "", "");

  }
}
