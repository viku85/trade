import WebSocket from 'ws';

interface FyersWebSocketConfig {
  accessToken: string;
  symbolList: string[]; // Symbols to subscribe to
}

class FyersWebSocketClient {
  private ws: WebSocket | null = null;
  private config: FyersWebSocketConfig;
  private readonly fyersWebSocketUrl = 'wss://api.fyers.in/ws/'; // Replace with actual Fyers WS URL if different

  constructor(config: FyersWebSocketConfig) {
    this.config = config;
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
    console.log('Fyers WebSocket connection opened.');
    this.authenticate();
  }

  private authenticate(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const authMessage = {
        // Consult Fyers API docs for the exact authentication message format
        // This is a placeholder example
        type: 'auth',
        token: this.config.accessToken,
      };
      this.ws.send(JSON.stringify(authMessage));
      console.log('Sent authentication message to Fyers WebSocket.');
    }
  }

  private subscribeToSymbols(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const subscribeMessage = {
        // Consult Fyers API docs for the exact subscription message format
        // This is a placeholder example
        type: 'subscribe',
        symbols: this.config.symbolList.join(','), // Assuming comma-separated symbols
      };
      this.ws.send(JSON.stringify(subscribeMessage));
      console.log(`Sent subscription message for symbols: ${this.config.symbolList.join(', ')}`);
    }
  }

  private handleMessage(data: WebSocket.Data): void {
    console.log('Received message from Fyers WebSocket:', data.toString());
    // Parse the message and process market data
    // You will need to implement logic here to handle different message types
    // (e.g., price updates, trade data) and potentially pass them to your rule engine.
  }

  private handleError(error: Error): void {
    console.error('Fyers WebSocket error:', error);
    // Implement error handling and potential reconnection logic
  }

  private handleClose(code: number, reason: string): void {
    console.log(`Fyers WebSocket connection closed. Code: ${code}, Reason: ${reason}`);
    // Implement reconnection logic if needed
  }

  public disconnect(): void {
    if (this.ws) {
      this.ws.close();
    }
  }

  // Add other methods as needed, e.g., to unsubscribe from symbols
}

export default FyersWebSocketClient;