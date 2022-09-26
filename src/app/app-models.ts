export interface SampleResponse {
    id: string;
    uid: string;
    name: string;
    type: string;
    description: string;
    review: string;
    logo: string;
    address: string;
    hours: Record<string, Timings>
  }
  
  export interface Timings {
    opens_at: string;
    closes_at: string;
    is_closed: string;
  }
  
  export interface WordList {
    word: string;
    occurances: number;
  }
  