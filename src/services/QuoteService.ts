import axios, { AxiosResponse } from "axios";
import Quote from "./Quote";

// This prevents potential collision of id's, and because we're never sending these ID's to the services, it should be fine
function createIdGenerator() {
  var id = 0;
  return () => {
    ++id;
    return id;
  };
}
const _idGen = createIdGenerator();

type QuoteGenerator = {
  url: string,
  generate: (resp: AxiosResponse) => Quote
};

type QuoteGardenResponse = {
  statusCode: number,
  data: Array<{ quoteText: string, quoteAuthor: string }>
};
type QuotableResponse = {
  content: string,
  author: string
};
type BreakingBadQuoteResponse = {
  quote: string,
  author: string
}


export default class QuoteService {
  private _responseGenerators: Array<QuoteGenerator> = [
    {
      url: 'https://quote-garden.herokuapp.com/api/v3/quotes/random',
      generate: this._parseQuoteGardenResponse
    },
    {
      url: 'https://api.quotable.io/random',
      generate: this._parseQuotableResponse
    },
    {
      url: 'https://breaking-bad-quotes.herokuapp.com/v1/quotes',
      generate: this._parseBreakingBadQuoteResponse
    },
  ];

  constructor() {
    // this.getRandomQuote = this.getRandomQuote.bind(this);
    // this.getQuoteGardenQuote = this.getQuoteGardenQuote.bind(this);
    // this.getQuotableQuote = this.getQuotableQuote.bind(this);
    // this.getBreakingBadQuote = this.getBreakingBadQuote.bind(this);
    // this.getQuote = this.getQuote.bind(this);

    // this._parseQuoteGardenResponse = this._parseQuoteGardenResponse.bind(this);
    // this._parseQuotableResponse = this._parseQuotableResponse.bind(this);
    // this._parseBreakingBadQuoteResponse = this._parseBreakingBadQuoteResponse.bind(this);
  }

  public getRandomQuote(): Promise<Quote> {
    const index = Math.floor(Math.random() * this._responseGenerators.length);
    return this.getQuote(this._responseGenerators[index]);
  }

  public getQuoteGardenQuote(): Promise<Quote> {
    return this.getQuote(this._responseGenerators[0]);
  }
  public getQuotableQuote(): Promise<Quote> {
    return this.getQuote(this._responseGenerators[1]);
  }
  public getBreakingBadQuote(): Promise<Quote> {
    return this.getQuote(this._responseGenerators[2]);
  }

  private async getQuote(generator: QuoteGenerator): Promise<Quote> {
    const resp = await axios.get(generator.url);
    return generator.generate(resp);
  }

  private _parseQuoteGardenResponse(axiosresp: AxiosResponse): Quote {
    const resp: QuoteGardenResponse = axiosresp.data;
    if (resp.statusCode != 200) {
      // Exception
    }
    var data = resp.data[0];
    return new Quote(
      _idGen(),
      data.quoteText,
      data.quoteAuthor
    );
  }

  private _parseQuotableResponse(axiosresp: AxiosResponse): Quote {
    const resp: QuotableResponse = axiosresp.data;
    return new Quote(
      _idGen(),
      resp.content,
      resp.author
    );
  }

  private _parseBreakingBadQuoteResponse(axiosresp: AxiosResponse): Quote {
    const resps: Array<BreakingBadQuoteResponse> = axiosresp.data;
    const resp = resps[0];
    console.log(axiosresp.data);
    return new Quote(
      _idGen(),
      resp.quote,
      resp.author
    );
  }
}
