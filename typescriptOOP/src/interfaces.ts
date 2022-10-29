export interface Driver {
  database: string;
  password: string;
  port: number;

  connected(): void;
}

class PosgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connected() {
    // code
  }
}
