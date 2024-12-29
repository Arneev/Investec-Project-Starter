export interface Transaction {
  accountNumber: string;
  dateTime: string;
  centsAmount: number;
  currencyCode: string;
  type: string;
  reference: string;
  card: Card;
  merchant: Merchant;
}

export interface Card {
  id: string;
}

export interface Merchant {
  category: Category;
  name: string;
  city: string;
  country: Country;
}

export interface Category {
  code: string;
  key: string;
  name: string;
}

export interface Country {
  code: string;
  alpha3: string;
  name: string;
}
