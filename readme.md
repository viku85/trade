# Real-Time Automated Trading System

## Project Description

This project implements a real-time automated trading system that allows users to define trading rules based on market data. The system evaluates these rules in real-time using incoming market data and automatically triggers buy or sell orders through a connected trading API. An in-memory cache is used to efficiently manage rules and their associated symbols and users, ensuring fast access during real-time evaluation.

## Business Goals

The primary business goal of this system is to empower users to automate their trading strategies. By allowing users to define custom rules, the system aims to:

- Enable hands-free trading based on predefined criteria.
- Facilitate quicker reaction to market movements compared to manual trading.
- Potentially improve trading outcomes by removing emotional biases.
- Provide a platform for users to implement and test their trading logic.

## Technical Architecture

The system is built around a few key components that work together to enable real-time automated trading:

- **Rule Engine:** A core component responsible for evaluating defined rules against incoming market data and user-specific conditions.
- **Trade Rule Evaluator Service (`TradeRuleEvaluatorService`):** This service receives real-time market data, retrieves relevant rules from the cache, composes the context (market data, user info, rule), and uses the Rule Engine to evaluate each rule. If a rule evaluates successfully, it triggers a trade.
- **Trade Service (`TradeService`):** Handles the execution of buy and sell orders by interacting with an external trading API (`ITradeApi`). It also records trade details in the database using the `TradeRepository`.
- **Trading API Interface (`ITradeApi`):** An abstraction layer for interacting with a specific trading platform's API (e.g., Fyers).
- **Trade Repository (`TradeRepository`):** Manages database interactions for storing trade details, including purchases, sales, and `RulePurchase` records (linking rules to triggered trades).
- **Rule Cache Service (`RuleCacheService`):** Maintains an in-memory cache of trading rules, organized by the trading symbol. This allows for quick retrieval of relevant rules when market data arrives for a specific symbol. It is initialized at application startup and updated when rules are created, updated, or deleted.
- **Rule Controller:** Provides API endpoints for users to create, update, and delete their trading rules. It interacts with the database (likely through a `RuleService`) and updates the `RuleCacheService` accordingly.
- **WebSocket Client (`FyersWebSocketClient`):** Connects to the trading platform's real-time data feed (e.g., Fyers WebSocket API) to receive market data updates. It subscribes to symbols based on the rules in the `RuleCacheService` and forwards incoming data to the `TradeRuleEvaluatorService`.
- **Initialization Logic (`real-time-trade.initializer.ts`, `app.ts`):** A dedicated initializer function orchestrates the setup of all services and repositories at application startup. It builds the rule cache and initiates WebSocket subscriptions based on the cached rules. The main application file (`app.ts`) calls this initializer during its bootstrap process.

## Key Features

- **Rule-Based Automated Trading:** Define custom rules to automate buy and sell decisions.
- **Real-Time Data Processing:** Process market data in real-time to evaluate rules promptly.
- **Efficient Rule Retrieval:** Utilize an in-memory cache for fast access to relevant rules.
- **Trading API Integration:** Connect to external trading platforms for order execution.
- **Trade Recording:** Log all rule-triggered trades for tracking and analysis.
- **Scalable Architecture:** Designed with modular components for potential scaling.

## Technologies Used

- Node.js
- TypeScript
- Express (for API endpoints)
- Prisma (for database interactions)
- WebSocket Library (for real-time data)
- Custom Rule Engine
- (Potentially) A Dependency Injection mechanism

## Setup and Installation

**(Placeholder: Provide instructions on how to set up the project locally)**

1.  Clone the repository.
2.  Install dependencies: `npm install` or `yarn install`.
3.  Set up your database and configure Prisma.
4.  Set up environment variables (API keys, database connection string, etc.).
5.  Run database migrations.
6.  Build the project: `npm run build` or `yarn build`.
7.  Start the application: `npm start` or `yarn start`.

## Configuration

**(Placeholder: Detail the necessary configuration options)**

- `FYERS_API_KEY`: Your Fyers API key.
- `FYERS_SECRET_KEY`: Your Fyers secret key.
- `DATABASE_URL`: Your database connection string.
- Any other relevant configuration for the Rule Engine, WebSocket client, etc.

## API Endpoints

**(Placeholder: List and briefly describe the main API endpoints)**

- `POST /api/rules`: Create a new trading rule.
- `PUT /api/rules/:id`: Update an existing trading rule.
- `DELETE /api/rules/:id`: Delete a trading rule.
- (Add any other relevant endpoints)

## Future Enhancements

- More complex and dynamic rule types.
- Backtesting functionality to test rules against historical data.
- A user interface for managing rules and monitoring trades.
- Support for multiple trading platforms.
- Advanced analytics and reporting on trading performance.
- Integration with other data sources (e.g., news, social sentiment).

# Command to create the file at one go

moduleName\moduleName.{controller,route,service,validation}.ts

# Command to create module

npm run plop
