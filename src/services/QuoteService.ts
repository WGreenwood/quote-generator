import axios from "axios";
import Quote from "./Quote";

// This prevents potential collision of id's, and because we're never sending these ID's to the services, it should be fine
function createIdGenerator() {
  var id = 0;
  return () => {
    ++id;
    return id;
  };
}

type QuoteGenerator = {
  url: string,
  generate: (jsonStr: string) => Quote
};

export default class QuoteService {
  private _genId = createIdGenerator();
  private _responseGenerators: Array<QuoteGenerator> = [
    {
      url: 'https://quote-garden.herokuapp.com/api/v3/quotes/random',
      generate: this._quoteGardenResponse
    },
    {
      url: 'https://api.quotable.io/random',
      generate: this._quotableResponse
    },
    {
      url: 'https://breaking-bad-quotes.herokuapp.com/v1/quotes',
      generate: this._breakingBadQuoteResponse
    },
  ];

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
    const resp = await axios.get<string>(generator.url);
    return generator.generate(resp.data);
  }

  private _quoteGardenResponse(jsonStr: string): Quote {
    const json = JSON.parse(jsonStr);
    if (json['statusCode'] != 200) {
      // Exception
    }
    var data = json['data'][0];
    return new Quote(
      this._genId(),
      data['quoteText'],
      data['quoteAuthor']
    );
  }

  private _quotableResponse(jsonStr: string): Quote {
    const json = JSON.parse(jsonStr);
    return new Quote(
      this._genId(),
      json['content'],
      json['author']
    );
  }

  private _breakingBadQuoteResponse(jsonStr: string): Quote {
    const json = JSON.parse(jsonStr);
    return new Quote(
      this._genId(),
      json['quote'],
      json['author']
    );
  }
}
