import WebSocket from 'ws';

interface FyersWebSocketConfig {
  accessToken: string;
  symbolList: string[];
  wsUrl?: string;
}

class FyersWebSocketClient {
  private ws: WebSocket | null = null;
  private config: FyersWebSocketConfig;
  private readonly fyersWebSocketUrl: string;
  private marketDataCallback?: (data: any) => void;

  constructor(config: FyersWebSocketConfig) {
    this.config = config;
    this.fyersWebSocketUrl = config.wsUrl || 'wss://api.fyers.in/ws/';
    this.connect();
  }

  private connect(): void {
    this.ws = new WebSocket(this.fyersWebSocketUrl);

    this.ws.on('open', this.handleOpen.bind(this));
    this.ws.on('message', this.handleMessage.bind(this));
    this.ws.on('error', this.handleError.bind(this));
    this.ws.on('close', this.handleClose.bind(this));
  }

  private handleOpen(): void {
    console.log('WebSocket connection opened.');
    this.authenticate();
  }

  private authenticate(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const authMessage = {
        type: 'auth',
        token: this.config.accessToken,
      };
      this.ws.send(JSON.stringify(authMessage));
      console.log('Sent authentication message to WebSocket.');
    }
  }

  public subscribeToSymbols(symbols: string[]): void {
    this.config.symbolList = symbols;
    this.subscribeToSymbolsInternal();
  }

  private subscribeToSymbolsInternal(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const payload = {
        a: 'subscribe',
        o: {symbols: this.config.symbolList.join(',')},
      };
      this.ws.send(JSON.stringify(payload));
    }
  }

  public onMarketData(callback: (data: any) => void): void {
    this.marketDataCallback = callback;
  }

  private handleMessage(msg: string): void {
    try {
      const data = JSON.parse(msg);
      if (this.marketDataCallback) {
        this.marketDataCallback(data);
      }
      console.log('Received message from WebSocket:', msg);
    } catch (e) {
      console.error('Received message from WebSocket:', msg);
      // Do not call callback on parse error
    }
  }

  private handleError(error: Error): void {
    console.error('WebSocket error:', error);
  }

  private handleClose(code: number, reason: string): void {
    console.log('WebSocket connection closed:', code, reason);
  }
}

export default FyersWebSocketClient;
