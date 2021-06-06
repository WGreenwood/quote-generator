import axios from "axios";
import Quote from "./Quote";
import { QuoteGardenResponse } from "./QuoteGardenResponse";

// This prevents potential collision of id's, and because we're never sending these ID's to the services, it should be fine
function createIdGenerator() {
  var id = 0;
  return () => {
    ++id;
    return id;
  };
}

type QuoteGenResult = { success: boolean, quote: Quote };
type QuoteGenerator = () => Promise<QuoteGenResult>;

export default class QuoteService {
  private _genId = createIdGenerator();
  private _quoteGenerators: Array<QuoteGenerator> = [
    this._getRandomQuote1,
    this._getRandomQuote2,
  ];

  public async getRandomQuote(): Promise<QuoteGenResult> {
    return await this._getRandomGenerator()();
  }

  private _getRandomGenerator(): QuoteGenerator {
    const count = this._quoteGenerators.length;
    const index = Math.floor(Math.random() * count);
    return this._quoteGenerators[index];
  }

  private async _getRandomQuote1(): Promise<QuoteGenResult> {
    const axiosresp = await axios.get<string>('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    const resp = new QuoteGardenResponse(axiosresp, this._genId());
    return {
      success: resp.success,
      quote: resp.quote
    };
  }

  private async _getRandomQuote2(): Promise<QuoteGenResult> {
    return {
      success: true,
      quote: new Quote(this._genId(), "", "")
    };
  }
};
