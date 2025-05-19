
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model RulePurchase
 * 
 */
export type RulePurchase = $Result.DefaultSelection<Prisma.$RulePurchasePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rules
 * const rules = await prisma.rule.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Rules
   * const rules = await prisma.rule.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rulePurchase`: Exposes CRUD operations for the **RulePurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RulePurchases
    * const rulePurchases = await prisma.rulePurchase.findMany()
    * ```
    */
  get rulePurchase(): Prisma.RulePurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Rule: 'Rule',
    RulePurchase: 'RulePurchase',
    User: 'User',
    Purchase: 'Purchase',
    Sale: 'Sale'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rule" | "rulePurchase" | "user" | "purchase" | "sale"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      RulePurchase: {
        payload: Prisma.$RulePurchasePayload<ExtArgs>
        fields: Prisma.RulePurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RulePurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RulePurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          findFirst: {
            args: Prisma.RulePurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RulePurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          findMany: {
            args: Prisma.RulePurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>[]
          }
          create: {
            args: Prisma.RulePurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          createMany: {
            args: Prisma.RulePurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RulePurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>[]
          }
          delete: {
            args: Prisma.RulePurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          update: {
            args: Prisma.RulePurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          deleteMany: {
            args: Prisma.RulePurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RulePurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RulePurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>[]
          }
          upsert: {
            args: Prisma.RulePurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePurchasePayload>
          }
          aggregate: {
            args: Prisma.RulePurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRulePurchase>
          }
          groupBy: {
            args: Prisma.RulePurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RulePurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RulePurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<RulePurchaseCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    rule?: RuleOmit
    rulePurchase?: RulePurchaseOmit
    user?: UserOmit
    purchase?: PurchaseOmit
    sale?: SaleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RuleCountOutputType
   */

  export type RuleCountOutputType = {
    RulePurchase: number
  }

  export type RuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RulePurchase?: boolean | RuleCountOutputTypeCountRulePurchaseArgs
  }

  // Custom InputTypes
  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleCountOutputType
     */
    select?: RuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeCountRulePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RulePurchaseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    purchases: number
    RuleToUser: number
    RulePurchaseToUser: number
    sales: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    RuleToUser?: boolean | UserCountOutputTypeCountRuleToUserArgs
    RulePurchaseToUser?: boolean | UserCountOutputTypeCountRulePurchaseToUserArgs
    sales?: boolean | UserCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRuleToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRulePurchaseToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RulePurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    RulePurchase: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RulePurchase?: boolean | PurchaseCountOutputTypeCountRulePurchaseArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountRulePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RulePurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RuleSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
    userId: number | null
  }

  export type RuleMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
    userId: number | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    type: number
    condition: number
    userId: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RuleSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    userId?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    userId?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    condition?: true
    userId?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    type: string
    condition: JsonValue
    userId: number
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    condition?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    RulePurchase?: boolean | Rule$RulePurchaseArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    condition?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    condition?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    condition?: boolean
    userId?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "type" | "condition" | "userId", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    RulePurchase?: boolean | Rule$RulePurchaseArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      RulePurchase: Prisma.$RulePurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      type: string
      condition: Prisma.JsonValue
      userId: number
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RulePurchase<T extends Rule$RulePurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Rule$RulePurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'Int'>
    readonly createdAt: FieldRef<"Rule", 'DateTime'>
    readonly updatedAt: FieldRef<"Rule", 'DateTime'>
    readonly type: FieldRef<"Rule", 'String'>
    readonly condition: FieldRef<"Rule", 'Json'>
    readonly userId: FieldRef<"Rule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule.RulePurchase
   */
  export type Rule$RulePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    where?: RulePurchaseWhereInput
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    cursor?: RulePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
  }


  /**
   * Model RulePurchase
   */

  export type AggregateRulePurchase = {
    _count: RulePurchaseCountAggregateOutputType | null
    _avg: RulePurchaseAvgAggregateOutputType | null
    _sum: RulePurchaseSumAggregateOutputType | null
    _min: RulePurchaseMinAggregateOutputType | null
    _max: RulePurchaseMaxAggregateOutputType | null
  }

  export type RulePurchaseAvgAggregateOutputType = {
    id: number | null
    ruleId: number | null
    purchaseId: number | null
    userId: number | null
  }

  export type RulePurchaseSumAggregateOutputType = {
    id: number | null
    ruleId: number | null
    purchaseId: number | null
    userId: number | null
  }

  export type RulePurchaseMinAggregateOutputType = {
    id: number | null
    ruleId: number | null
    purchaseId: number | null
    userId: number | null
  }

  export type RulePurchaseMaxAggregateOutputType = {
    id: number | null
    ruleId: number | null
    purchaseId: number | null
    userId: number | null
  }

  export type RulePurchaseCountAggregateOutputType = {
    id: number
    ruleId: number
    purchaseId: number
    userId: number
    _all: number
  }


  export type RulePurchaseAvgAggregateInputType = {
    id?: true
    ruleId?: true
    purchaseId?: true
    userId?: true
  }

  export type RulePurchaseSumAggregateInputType = {
    id?: true
    ruleId?: true
    purchaseId?: true
    userId?: true
  }

  export type RulePurchaseMinAggregateInputType = {
    id?: true
    ruleId?: true
    purchaseId?: true
    userId?: true
  }

  export type RulePurchaseMaxAggregateInputType = {
    id?: true
    ruleId?: true
    purchaseId?: true
    userId?: true
  }

  export type RulePurchaseCountAggregateInputType = {
    id?: true
    ruleId?: true
    purchaseId?: true
    userId?: true
    _all?: true
  }

  export type RulePurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RulePurchase to aggregate.
     */
    where?: RulePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RulePurchases to fetch.
     */
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RulePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RulePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RulePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RulePurchases
    **/
    _count?: true | RulePurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RulePurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RulePurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RulePurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RulePurchaseMaxAggregateInputType
  }

  export type GetRulePurchaseAggregateType<T extends RulePurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateRulePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRulePurchase[P]>
      : GetScalarType<T[P], AggregateRulePurchase[P]>
  }




  export type RulePurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RulePurchaseWhereInput
    orderBy?: RulePurchaseOrderByWithAggregationInput | RulePurchaseOrderByWithAggregationInput[]
    by: RulePurchaseScalarFieldEnum[] | RulePurchaseScalarFieldEnum
    having?: RulePurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RulePurchaseCountAggregateInputType | true
    _avg?: RulePurchaseAvgAggregateInputType
    _sum?: RulePurchaseSumAggregateInputType
    _min?: RulePurchaseMinAggregateInputType
    _max?: RulePurchaseMaxAggregateInputType
  }

  export type RulePurchaseGroupByOutputType = {
    id: number
    ruleId: number
    purchaseId: number
    userId: number
    _count: RulePurchaseCountAggregateOutputType | null
    _avg: RulePurchaseAvgAggregateOutputType | null
    _sum: RulePurchaseSumAggregateOutputType | null
    _min: RulePurchaseMinAggregateOutputType | null
    _max: RulePurchaseMaxAggregateOutputType | null
  }

  type GetRulePurchaseGroupByPayload<T extends RulePurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RulePurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RulePurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RulePurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], RulePurchaseGroupByOutputType[P]>
        }
      >
    >


  export type RulePurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    purchaseId?: boolean
    userId?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rulePurchase"]>

  export type RulePurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    purchaseId?: boolean
    userId?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rulePurchase"]>

  export type RulePurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    purchaseId?: boolean
    userId?: boolean
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rulePurchase"]>

  export type RulePurchaseSelectScalar = {
    id?: boolean
    ruleId?: boolean
    purchaseId?: boolean
    userId?: boolean
  }

  export type RulePurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ruleId" | "purchaseId" | "userId", ExtArgs["result"]["rulePurchase"]>
  export type RulePurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RulePurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RulePurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | RuleDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RulePurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RulePurchase"
    objects: {
      rule: Prisma.$RulePayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ruleId: number
      purchaseId: number
      userId: number
    }, ExtArgs["result"]["rulePurchase"]>
    composites: {}
  }

  type RulePurchaseGetPayload<S extends boolean | null | undefined | RulePurchaseDefaultArgs> = $Result.GetResult<Prisma.$RulePurchasePayload, S>

  type RulePurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RulePurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RulePurchaseCountAggregateInputType | true
    }

  export interface RulePurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RulePurchase'], meta: { name: 'RulePurchase' } }
    /**
     * Find zero or one RulePurchase that matches the filter.
     * @param {RulePurchaseFindUniqueArgs} args - Arguments to find a RulePurchase
     * @example
     * // Get one RulePurchase
     * const rulePurchase = await prisma.rulePurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RulePurchaseFindUniqueArgs>(args: SelectSubset<T, RulePurchaseFindUniqueArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RulePurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RulePurchaseFindUniqueOrThrowArgs} args - Arguments to find a RulePurchase
     * @example
     * // Get one RulePurchase
     * const rulePurchase = await prisma.rulePurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RulePurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, RulePurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RulePurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseFindFirstArgs} args - Arguments to find a RulePurchase
     * @example
     * // Get one RulePurchase
     * const rulePurchase = await prisma.rulePurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RulePurchaseFindFirstArgs>(args?: SelectSubset<T, RulePurchaseFindFirstArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RulePurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseFindFirstOrThrowArgs} args - Arguments to find a RulePurchase
     * @example
     * // Get one RulePurchase
     * const rulePurchase = await prisma.rulePurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RulePurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, RulePurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RulePurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RulePurchases
     * const rulePurchases = await prisma.rulePurchase.findMany()
     * 
     * // Get first 10 RulePurchases
     * const rulePurchases = await prisma.rulePurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rulePurchaseWithIdOnly = await prisma.rulePurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RulePurchaseFindManyArgs>(args?: SelectSubset<T, RulePurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RulePurchase.
     * @param {RulePurchaseCreateArgs} args - Arguments to create a RulePurchase.
     * @example
     * // Create one RulePurchase
     * const RulePurchase = await prisma.rulePurchase.create({
     *   data: {
     *     // ... data to create a RulePurchase
     *   }
     * })
     * 
     */
    create<T extends RulePurchaseCreateArgs>(args: SelectSubset<T, RulePurchaseCreateArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RulePurchases.
     * @param {RulePurchaseCreateManyArgs} args - Arguments to create many RulePurchases.
     * @example
     * // Create many RulePurchases
     * const rulePurchase = await prisma.rulePurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RulePurchaseCreateManyArgs>(args?: SelectSubset<T, RulePurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RulePurchases and returns the data saved in the database.
     * @param {RulePurchaseCreateManyAndReturnArgs} args - Arguments to create many RulePurchases.
     * @example
     * // Create many RulePurchases
     * const rulePurchase = await prisma.rulePurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RulePurchases and only return the `id`
     * const rulePurchaseWithIdOnly = await prisma.rulePurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RulePurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, RulePurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RulePurchase.
     * @param {RulePurchaseDeleteArgs} args - Arguments to delete one RulePurchase.
     * @example
     * // Delete one RulePurchase
     * const RulePurchase = await prisma.rulePurchase.delete({
     *   where: {
     *     // ... filter to delete one RulePurchase
     *   }
     * })
     * 
     */
    delete<T extends RulePurchaseDeleteArgs>(args: SelectSubset<T, RulePurchaseDeleteArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RulePurchase.
     * @param {RulePurchaseUpdateArgs} args - Arguments to update one RulePurchase.
     * @example
     * // Update one RulePurchase
     * const rulePurchase = await prisma.rulePurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RulePurchaseUpdateArgs>(args: SelectSubset<T, RulePurchaseUpdateArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RulePurchases.
     * @param {RulePurchaseDeleteManyArgs} args - Arguments to filter RulePurchases to delete.
     * @example
     * // Delete a few RulePurchases
     * const { count } = await prisma.rulePurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RulePurchaseDeleteManyArgs>(args?: SelectSubset<T, RulePurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RulePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RulePurchases
     * const rulePurchase = await prisma.rulePurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RulePurchaseUpdateManyArgs>(args: SelectSubset<T, RulePurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RulePurchases and returns the data updated in the database.
     * @param {RulePurchaseUpdateManyAndReturnArgs} args - Arguments to update many RulePurchases.
     * @example
     * // Update many RulePurchases
     * const rulePurchase = await prisma.rulePurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RulePurchases and only return the `id`
     * const rulePurchaseWithIdOnly = await prisma.rulePurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RulePurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, RulePurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RulePurchase.
     * @param {RulePurchaseUpsertArgs} args - Arguments to update or create a RulePurchase.
     * @example
     * // Update or create a RulePurchase
     * const rulePurchase = await prisma.rulePurchase.upsert({
     *   create: {
     *     // ... data to create a RulePurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RulePurchase we want to update
     *   }
     * })
     */
    upsert<T extends RulePurchaseUpsertArgs>(args: SelectSubset<T, RulePurchaseUpsertArgs<ExtArgs>>): Prisma__RulePurchaseClient<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RulePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseCountArgs} args - Arguments to filter RulePurchases to count.
     * @example
     * // Count the number of RulePurchases
     * const count = await prisma.rulePurchase.count({
     *   where: {
     *     // ... the filter for the RulePurchases we want to count
     *   }
     * })
    **/
    count<T extends RulePurchaseCountArgs>(
      args?: Subset<T, RulePurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RulePurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RulePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RulePurchaseAggregateArgs>(args: Subset<T, RulePurchaseAggregateArgs>): Prisma.PrismaPromise<GetRulePurchaseAggregateType<T>>

    /**
     * Group by RulePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulePurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RulePurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RulePurchaseGroupByArgs['orderBy'] }
        : { orderBy?: RulePurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RulePurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRulePurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RulePurchase model
   */
  readonly fields: RulePurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RulePurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RulePurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rule<T extends RuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuleDefaultArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RulePurchase model
   */
  interface RulePurchaseFieldRefs {
    readonly id: FieldRef<"RulePurchase", 'Int'>
    readonly ruleId: FieldRef<"RulePurchase", 'Int'>
    readonly purchaseId: FieldRef<"RulePurchase", 'Int'>
    readonly userId: FieldRef<"RulePurchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RulePurchase findUnique
   */
  export type RulePurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RulePurchase to fetch.
     */
    where: RulePurchaseWhereUniqueInput
  }

  /**
   * RulePurchase findUniqueOrThrow
   */
  export type RulePurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RulePurchase to fetch.
     */
    where: RulePurchaseWhereUniqueInput
  }

  /**
   * RulePurchase findFirst
   */
  export type RulePurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RulePurchase to fetch.
     */
    where?: RulePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RulePurchases to fetch.
     */
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RulePurchases.
     */
    cursor?: RulePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RulePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RulePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RulePurchases.
     */
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * RulePurchase findFirstOrThrow
   */
  export type RulePurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RulePurchase to fetch.
     */
    where?: RulePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RulePurchases to fetch.
     */
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RulePurchases.
     */
    cursor?: RulePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RulePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RulePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RulePurchases.
     */
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * RulePurchase findMany
   */
  export type RulePurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which RulePurchases to fetch.
     */
    where?: RulePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RulePurchases to fetch.
     */
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RulePurchases.
     */
    cursor?: RulePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RulePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RulePurchases.
     */
    skip?: number
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * RulePurchase create
   */
  export type RulePurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a RulePurchase.
     */
    data: XOR<RulePurchaseCreateInput, RulePurchaseUncheckedCreateInput>
  }

  /**
   * RulePurchase createMany
   */
  export type RulePurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RulePurchases.
     */
    data: RulePurchaseCreateManyInput | RulePurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RulePurchase createManyAndReturn
   */
  export type RulePurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many RulePurchases.
     */
    data: RulePurchaseCreateManyInput | RulePurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RulePurchase update
   */
  export type RulePurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a RulePurchase.
     */
    data: XOR<RulePurchaseUpdateInput, RulePurchaseUncheckedUpdateInput>
    /**
     * Choose, which RulePurchase to update.
     */
    where: RulePurchaseWhereUniqueInput
  }

  /**
   * RulePurchase updateMany
   */
  export type RulePurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RulePurchases.
     */
    data: XOR<RulePurchaseUpdateManyMutationInput, RulePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which RulePurchases to update
     */
    where?: RulePurchaseWhereInput
    /**
     * Limit how many RulePurchases to update.
     */
    limit?: number
  }

  /**
   * RulePurchase updateManyAndReturn
   */
  export type RulePurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * The data used to update RulePurchases.
     */
    data: XOR<RulePurchaseUpdateManyMutationInput, RulePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which RulePurchases to update
     */
    where?: RulePurchaseWhereInput
    /**
     * Limit how many RulePurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RulePurchase upsert
   */
  export type RulePurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the RulePurchase to update in case it exists.
     */
    where: RulePurchaseWhereUniqueInput
    /**
     * In case the RulePurchase found by the `where` argument doesn't exist, create a new RulePurchase with this data.
     */
    create: XOR<RulePurchaseCreateInput, RulePurchaseUncheckedCreateInput>
    /**
     * In case the RulePurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RulePurchaseUpdateInput, RulePurchaseUncheckedUpdateInput>
  }

  /**
   * RulePurchase delete
   */
  export type RulePurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    /**
     * Filter which RulePurchase to delete.
     */
    where: RulePurchaseWhereUniqueInput
  }

  /**
   * RulePurchase deleteMany
   */
  export type RulePurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RulePurchases to delete
     */
    where?: RulePurchaseWhereInput
    /**
     * Limit how many RulePurchases to delete.
     */
    limit?: number
  }

  /**
   * RulePurchase without action
   */
  export type RulePurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    RuleToUser?: boolean | User$RuleToUserArgs<ExtArgs>
    RulePurchaseToUser?: boolean | User$RulePurchaseToUserArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    RuleToUser?: boolean | User$RuleToUserArgs<ExtArgs>
    RulePurchaseToUser?: boolean | User$RulePurchaseToUserArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      RuleToUser: Prisma.$RulePayload<ExtArgs>[]
      RulePurchaseToUser: Prisma.$RulePurchasePayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RuleToUser<T extends User$RuleToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$RuleToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RulePurchaseToUser<T extends User$RulePurchaseToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$RulePurchaseToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.RuleToUser
   */
  export type User$RuleToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * User.RulePurchaseToUser
   */
  export type User$RulePurchaseToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    where?: RulePurchaseWhereInput
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    cursor?: RulePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    asset: string | null
    userId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    asset: string | null
    userId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    amount: number
    asset: number
    userId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    amount: number
    asset: string
    userId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    RulePurchase?: boolean | Purchase$RulePurchaseArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "amount" | "asset" | "userId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    RulePurchase?: boolean | Purchase$RulePurchaseArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      RulePurchase: Prisma.$RulePurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      amount: number
      asset: string
      userId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RulePurchase<T extends Purchase$RulePurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$RulePurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
    readonly amount: FieldRef<"Purchase", 'Float'>
    readonly asset: FieldRef<"Purchase", 'String'>
    readonly userId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.RulePurchase
   */
  export type Purchase$RulePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulePurchase
     */
    select?: RulePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RulePurchase
     */
    omit?: RulePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulePurchaseInclude<ExtArgs> | null
    where?: RulePurchaseWhereInput
    orderBy?: RulePurchaseOrderByWithRelationInput | RulePurchaseOrderByWithRelationInput[]
    cursor?: RulePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RulePurchaseScalarFieldEnum | RulePurchaseScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    asset: string | null
    userId: number | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    asset: string | null
    userId: number | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    amount: number
    asset: number
    userId: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    asset?: true
    userId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    amount: number
    asset: string
    userId: number
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    asset?: boolean
    userId?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "amount" | "asset" | "userId", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      amount: number
      asset: string
      userId: number
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly updatedAt: FieldRef<"Sale", 'DateTime'>
    readonly amount: FieldRef<"Sale", 'Float'>
    readonly asset: FieldRef<"Sale", 'String'>
    readonly userId: FieldRef<"Sale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RuleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    condition: 'condition',
    userId: 'userId'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const RulePurchaseScalarFieldEnum: {
    id: 'id',
    ruleId: 'ruleId',
    purchaseId: 'purchaseId',
    userId: 'userId'
  };

  export type RulePurchaseScalarFieldEnum = (typeof RulePurchaseScalarFieldEnum)[keyof typeof RulePurchaseScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    asset: 'asset',
    userId: 'userId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    asset: 'asset',
    userId: 'userId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: IntFilter<"Rule"> | number
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    type?: StringFilter<"Rule"> | string
    condition?: JsonFilter<"Rule">
    userId?: IntFilter<"Rule"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RulePurchase?: RulePurchaseListRelationFilter
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    RulePurchase?: RulePurchaseOrderByRelationAggregateInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    type?: StringFilter<"Rule"> | string
    condition?: JsonFilter<"Rule">
    userId?: IntFilter<"Rule"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RulePurchase?: RulePurchaseListRelationFilter
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
    type?: StringWithAggregatesFilter<"Rule"> | string
    condition?: JsonWithAggregatesFilter<"Rule">
    userId?: IntWithAggregatesFilter<"Rule"> | number
  }

  export type RulePurchaseWhereInput = {
    AND?: RulePurchaseWhereInput | RulePurchaseWhereInput[]
    OR?: RulePurchaseWhereInput[]
    NOT?: RulePurchaseWhereInput | RulePurchaseWhereInput[]
    id?: IntFilter<"RulePurchase"> | number
    ruleId?: IntFilter<"RulePurchase"> | number
    purchaseId?: IntFilter<"RulePurchase"> | number
    userId?: IntFilter<"RulePurchase"> | number
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RulePurchaseOrderByWithRelationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
    rule?: RuleOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RulePurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RulePurchaseWhereInput | RulePurchaseWhereInput[]
    OR?: RulePurchaseWhereInput[]
    NOT?: RulePurchaseWhereInput | RulePurchaseWhereInput[]
    ruleId?: IntFilter<"RulePurchase"> | number
    purchaseId?: IntFilter<"RulePurchase"> | number
    userId?: IntFilter<"RulePurchase"> | number
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RulePurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
    _count?: RulePurchaseCountOrderByAggregateInput
    _avg?: RulePurchaseAvgOrderByAggregateInput
    _max?: RulePurchaseMaxOrderByAggregateInput
    _min?: RulePurchaseMinOrderByAggregateInput
    _sum?: RulePurchaseSumOrderByAggregateInput
  }

  export type RulePurchaseScalarWhereWithAggregatesInput = {
    AND?: RulePurchaseScalarWhereWithAggregatesInput | RulePurchaseScalarWhereWithAggregatesInput[]
    OR?: RulePurchaseScalarWhereWithAggregatesInput[]
    NOT?: RulePurchaseScalarWhereWithAggregatesInput | RulePurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RulePurchase"> | number
    ruleId?: IntWithAggregatesFilter<"RulePurchase"> | number
    purchaseId?: IntWithAggregatesFilter<"RulePurchase"> | number
    userId?: IntWithAggregatesFilter<"RulePurchase"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    purchases?: PurchaseListRelationFilter
    RuleToUser?: RuleListRelationFilter
    RulePurchaseToUser?: RulePurchaseListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    RuleToUser?: RuleOrderByRelationAggregateInput
    RulePurchaseToUser?: RulePurchaseOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    purchases?: PurchaseListRelationFilter
    RuleToUser?: RuleListRelationFilter
    RulePurchaseToUser?: RulePurchaseListRelationFilter
    sales?: SaleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    amount?: FloatFilter<"Purchase"> | number
    asset?: StringFilter<"Purchase"> | string
    userId?: IntFilter<"Purchase"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RulePurchase?: RulePurchaseListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    RulePurchase?: RulePurchaseOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    amount?: FloatFilter<"Purchase"> | number
    asset?: StringFilter<"Purchase"> | string
    userId?: IntFilter<"Purchase"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RulePurchase?: RulePurchaseListRelationFilter
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    amount?: FloatWithAggregatesFilter<"Purchase"> | number
    asset?: StringWithAggregatesFilter<"Purchase"> | string
    userId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    amount?: FloatFilter<"Sale"> | number
    asset?: StringFilter<"Sale"> | string
    userId?: IntFilter<"Sale"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    amount?: FloatFilter<"Sale"> | number
    asset?: StringFilter<"Sale"> | string
    userId?: IntFilter<"Sale"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    amount?: FloatWithAggregatesFilter<"Sale"> | number
    asset?: StringWithAggregatesFilter<"Sale"> | string
    userId?: IntWithAggregatesFilter<"Sale"> | number
  }

  export type RuleCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutRuleToUserInput
    RulePurchase?: RulePurchaseCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    userId: number
    RulePurchase?: RulePurchaseUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutRuleToUserNestedInput
    RulePurchase?: RulePurchaseUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
    RulePurchase?: RulePurchaseUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    userId: number
  }

  export type RuleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RulePurchaseCreateInput = {
    rule: RuleCreateNestedOneWithoutRulePurchaseInput
    purchase: PurchaseCreateNestedOneWithoutRulePurchaseInput
    user: UserCreateNestedOneWithoutRulePurchaseToUserInput
  }

  export type RulePurchaseUncheckedCreateInput = {
    id?: number
    ruleId: number
    purchaseId: number
    userId: number
  }

  export type RulePurchaseUpdateInput = {
    rule?: RuleUpdateOneRequiredWithoutRulePurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutRulePurchaseNestedInput
    user?: UserUpdateOneRequiredWithoutRulePurchaseToUserNestedInput
  }

  export type RulePurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RulePurchaseCreateManyInput = {
    id?: number
    ruleId: number
    purchaseId: number
    userId: number
  }

  export type RulePurchaseUpdateManyMutationInput = {

  }

  export type RulePurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    RuleToUser?: RuleCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseCreateNestedManyWithoutUserInput
    sales?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    RuleToUser?: RuleUncheckedCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseUncheckedCreateNestedManyWithoutUserInput
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUpdateManyWithoutUserNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUncheckedUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUncheckedUpdateManyWithoutUserNestedInput
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    user: UserCreateNestedOneWithoutPurchasesInput
    RulePurchase?: RulePurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    userId: number
    RulePurchase?: RulePurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    RulePurchase?: RulePurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    RulePurchase?: RulePurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    userId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    user: UserCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    userId: number
  }

  export type SaleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    userId: number
  }

  export type SaleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RulePurchaseListRelationFilter = {
    every?: RulePurchaseWhereInput
    some?: RulePurchaseWhereInput
    none?: RulePurchaseWhereInput
  }

  export type RulePurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    userId?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RuleScalarRelationFilter = {
    is?: RuleWhereInput
    isNot?: RuleWhereInput
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type RulePurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
  }

  export type RulePurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
  }

  export type RulePurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
  }

  export type RulePurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
  }

  export type RulePurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    purchaseId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    asset?: SortOrder
    userId?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedOneWithoutRuleToUserInput = {
    create?: XOR<UserCreateWithoutRuleToUserInput, UserUncheckedCreateWithoutRuleToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuleToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RulePurchaseCreateNestedManyWithoutRuleInput = {
    create?: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput> | RulePurchaseCreateWithoutRuleInput[] | RulePurchaseUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutRuleInput | RulePurchaseCreateOrConnectWithoutRuleInput[]
    createMany?: RulePurchaseCreateManyRuleInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type RulePurchaseUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput> | RulePurchaseCreateWithoutRuleInput[] | RulePurchaseUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutRuleInput | RulePurchaseCreateOrConnectWithoutRuleInput[]
    createMany?: RulePurchaseCreateManyRuleInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutRuleToUserNestedInput = {
    create?: XOR<UserCreateWithoutRuleToUserInput, UserUncheckedCreateWithoutRuleToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuleToUserInput
    upsert?: UserUpsertWithoutRuleToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRuleToUserInput, UserUpdateWithoutRuleToUserInput>, UserUncheckedUpdateWithoutRuleToUserInput>
  }

  export type RulePurchaseUpdateManyWithoutRuleNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput> | RulePurchaseCreateWithoutRuleInput[] | RulePurchaseUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutRuleInput | RulePurchaseCreateOrConnectWithoutRuleInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutRuleInput | RulePurchaseUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: RulePurchaseCreateManyRuleInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutRuleInput | RulePurchaseUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutRuleInput | RulePurchaseUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RulePurchaseUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput> | RulePurchaseCreateWithoutRuleInput[] | RulePurchaseUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutRuleInput | RulePurchaseCreateOrConnectWithoutRuleInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutRuleInput | RulePurchaseUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: RulePurchaseCreateManyRuleInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutRuleInput | RulePurchaseUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutRuleInput | RulePurchaseUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type RuleCreateNestedOneWithoutRulePurchaseInput = {
    create?: XOR<RuleCreateWithoutRulePurchaseInput, RuleUncheckedCreateWithoutRulePurchaseInput>
    connectOrCreate?: RuleCreateOrConnectWithoutRulePurchaseInput
    connect?: RuleWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutRulePurchaseInput = {
    create?: XOR<PurchaseCreateWithoutRulePurchaseInput, PurchaseUncheckedCreateWithoutRulePurchaseInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutRulePurchaseInput
    connect?: PurchaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRulePurchaseToUserInput = {
    create?: XOR<UserCreateWithoutRulePurchaseToUserInput, UserUncheckedCreateWithoutRulePurchaseToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulePurchaseToUserInput
    connect?: UserWhereUniqueInput
  }

  export type RuleUpdateOneRequiredWithoutRulePurchaseNestedInput = {
    create?: XOR<RuleCreateWithoutRulePurchaseInput, RuleUncheckedCreateWithoutRulePurchaseInput>
    connectOrCreate?: RuleCreateOrConnectWithoutRulePurchaseInput
    upsert?: RuleUpsertWithoutRulePurchaseInput
    connect?: RuleWhereUniqueInput
    update?: XOR<XOR<RuleUpdateToOneWithWhereWithoutRulePurchaseInput, RuleUpdateWithoutRulePurchaseInput>, RuleUncheckedUpdateWithoutRulePurchaseInput>
  }

  export type PurchaseUpdateOneRequiredWithoutRulePurchaseNestedInput = {
    create?: XOR<PurchaseCreateWithoutRulePurchaseInput, PurchaseUncheckedCreateWithoutRulePurchaseInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutRulePurchaseInput
    upsert?: PurchaseUpsertWithoutRulePurchaseInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutRulePurchaseInput, PurchaseUpdateWithoutRulePurchaseInput>, PurchaseUncheckedUpdateWithoutRulePurchaseInput>
  }

  export type UserUpdateOneRequiredWithoutRulePurchaseToUserNestedInput = {
    create?: XOR<UserCreateWithoutRulePurchaseToUserInput, UserUncheckedCreateWithoutRulePurchaseToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulePurchaseToUserInput
    upsert?: UserUpsertWithoutRulePurchaseToUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRulePurchaseToUserInput, UserUpdateWithoutRulePurchaseToUserInput>, UserUncheckedUpdateWithoutRulePurchaseToUserInput>
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type RuleCreateNestedManyWithoutUserInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type RulePurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput> | RulePurchaseCreateWithoutUserInput[] | RulePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutUserInput | RulePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: RulePurchaseCreateManyUserInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type RulePurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput> | RulePurchaseCreateWithoutUserInput[] | RulePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutUserInput | RulePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: RulePurchaseCreateManyUserInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type RuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutUserInput | RuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutUserInput | RuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutUserInput | RuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type RulePurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput> | RulePurchaseCreateWithoutUserInput[] | RulePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutUserInput | RulePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutUserInput | RulePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RulePurchaseCreateManyUserInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutUserInput | RulePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutUserInput | RulePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput> | RuleCreateWithoutUserInput[] | RuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutUserInput | RuleCreateOrConnectWithoutUserInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutUserInput | RuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RuleCreateManyUserInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutUserInput | RuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutUserInput | RuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type RulePurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput> | RulePurchaseCreateWithoutUserInput[] | RulePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutUserInput | RulePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutUserInput | RulePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RulePurchaseCreateManyUserInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutUserInput | RulePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutUserInput | RulePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type RulePurchaseCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput> | RulePurchaseCreateWithoutPurchaseInput[] | RulePurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutPurchaseInput | RulePurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: RulePurchaseCreateManyPurchaseInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type RulePurchaseUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput> | RulePurchaseCreateWithoutPurchaseInput[] | RulePurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutPurchaseInput | RulePurchaseCreateOrConnectWithoutPurchaseInput[]
    createMany?: RulePurchaseCreateManyPurchaseInputEnvelope
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type RulePurchaseUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput> | RulePurchaseCreateWithoutPurchaseInput[] | RulePurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutPurchaseInput | RulePurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutPurchaseInput | RulePurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: RulePurchaseCreateManyPurchaseInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutPurchaseInput | RulePurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutPurchaseInput | RulePurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type RulePurchaseUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput> | RulePurchaseCreateWithoutPurchaseInput[] | RulePurchaseUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: RulePurchaseCreateOrConnectWithoutPurchaseInput | RulePurchaseCreateOrConnectWithoutPurchaseInput[]
    upsert?: RulePurchaseUpsertWithWhereUniqueWithoutPurchaseInput | RulePurchaseUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: RulePurchaseCreateManyPurchaseInputEnvelope
    set?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    disconnect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    delete?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    connect?: RulePurchaseWhereUniqueInput | RulePurchaseWhereUniqueInput[]
    update?: RulePurchaseUpdateWithWhereUniqueWithoutPurchaseInput | RulePurchaseUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: RulePurchaseUpdateManyWithWhereWithoutPurchaseInput | RulePurchaseUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutRuleToUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseCreateNestedManyWithoutUserInput
    sales?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRuleToUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseUncheckedCreateNestedManyWithoutUserInput
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRuleToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRuleToUserInput, UserUncheckedCreateWithoutRuleToUserInput>
  }

  export type RulePurchaseCreateWithoutRuleInput = {
    purchase: PurchaseCreateNestedOneWithoutRulePurchaseInput
    user: UserCreateNestedOneWithoutRulePurchaseToUserInput
  }

  export type RulePurchaseUncheckedCreateWithoutRuleInput = {
    id?: number
    purchaseId: number
    userId: number
  }

  export type RulePurchaseCreateOrConnectWithoutRuleInput = {
    where: RulePurchaseWhereUniqueInput
    create: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput>
  }

  export type RulePurchaseCreateManyRuleInputEnvelope = {
    data: RulePurchaseCreateManyRuleInput | RulePurchaseCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRuleToUserInput = {
    update: XOR<UserUpdateWithoutRuleToUserInput, UserUncheckedUpdateWithoutRuleToUserInput>
    create: XOR<UserCreateWithoutRuleToUserInput, UserUncheckedCreateWithoutRuleToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRuleToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRuleToUserInput, UserUncheckedUpdateWithoutRuleToUserInput>
  }

  export type UserUpdateWithoutRuleToUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUpdateManyWithoutUserNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRuleToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUncheckedUpdateManyWithoutUserNestedInput
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RulePurchaseUpsertWithWhereUniqueWithoutRuleInput = {
    where: RulePurchaseWhereUniqueInput
    update: XOR<RulePurchaseUpdateWithoutRuleInput, RulePurchaseUncheckedUpdateWithoutRuleInput>
    create: XOR<RulePurchaseCreateWithoutRuleInput, RulePurchaseUncheckedCreateWithoutRuleInput>
  }

  export type RulePurchaseUpdateWithWhereUniqueWithoutRuleInput = {
    where: RulePurchaseWhereUniqueInput
    data: XOR<RulePurchaseUpdateWithoutRuleInput, RulePurchaseUncheckedUpdateWithoutRuleInput>
  }

  export type RulePurchaseUpdateManyWithWhereWithoutRuleInput = {
    where: RulePurchaseScalarWhereInput
    data: XOR<RulePurchaseUpdateManyMutationInput, RulePurchaseUncheckedUpdateManyWithoutRuleInput>
  }

  export type RulePurchaseScalarWhereInput = {
    AND?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
    OR?: RulePurchaseScalarWhereInput[]
    NOT?: RulePurchaseScalarWhereInput | RulePurchaseScalarWhereInput[]
    id?: IntFilter<"RulePurchase"> | number
    ruleId?: IntFilter<"RulePurchase"> | number
    purchaseId?: IntFilter<"RulePurchase"> | number
    userId?: IntFilter<"RulePurchase"> | number
  }

  export type RuleCreateWithoutRulePurchaseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutRuleToUserInput
  }

  export type RuleUncheckedCreateWithoutRulePurchaseInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    userId: number
  }

  export type RuleCreateOrConnectWithoutRulePurchaseInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutRulePurchaseInput, RuleUncheckedCreateWithoutRulePurchaseInput>
  }

  export type PurchaseCreateWithoutRulePurchaseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutRulePurchaseInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    userId: number
  }

  export type PurchaseCreateOrConnectWithoutRulePurchaseInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutRulePurchaseInput, PurchaseUncheckedCreateWithoutRulePurchaseInput>
  }

  export type UserCreateWithoutRulePurchaseToUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    RuleToUser?: RuleCreateNestedManyWithoutUserInput
    sales?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRulePurchaseToUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    RuleToUser?: RuleUncheckedCreateNestedManyWithoutUserInput
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRulePurchaseToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRulePurchaseToUserInput, UserUncheckedCreateWithoutRulePurchaseToUserInput>
  }

  export type RuleUpsertWithoutRulePurchaseInput = {
    update: XOR<RuleUpdateWithoutRulePurchaseInput, RuleUncheckedUpdateWithoutRulePurchaseInput>
    create: XOR<RuleCreateWithoutRulePurchaseInput, RuleUncheckedCreateWithoutRulePurchaseInput>
    where?: RuleWhereInput
  }

  export type RuleUpdateToOneWithWhereWithoutRulePurchaseInput = {
    where?: RuleWhereInput
    data: XOR<RuleUpdateWithoutRulePurchaseInput, RuleUncheckedUpdateWithoutRulePurchaseInput>
  }

  export type RuleUpdateWithoutRulePurchaseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutRuleToUserNestedInput
  }

  export type RuleUncheckedUpdateWithoutRulePurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUpsertWithoutRulePurchaseInput = {
    update: XOR<PurchaseUpdateWithoutRulePurchaseInput, PurchaseUncheckedUpdateWithoutRulePurchaseInput>
    create: XOR<PurchaseCreateWithoutRulePurchaseInput, PurchaseUncheckedCreateWithoutRulePurchaseInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutRulePurchaseInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutRulePurchaseInput, PurchaseUncheckedUpdateWithoutRulePurchaseInput>
  }

  export type PurchaseUpdateWithoutRulePurchaseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutRulePurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutRulePurchaseToUserInput = {
    update: XOR<UserUpdateWithoutRulePurchaseToUserInput, UserUncheckedUpdateWithoutRulePurchaseToUserInput>
    create: XOR<UserCreateWithoutRulePurchaseToUserInput, UserUncheckedCreateWithoutRulePurchaseToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRulePurchaseToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRulePurchaseToUserInput, UserUncheckedUpdateWithoutRulePurchaseToUserInput>
  }

  export type UserUpdateWithoutRulePurchaseToUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUpdateManyWithoutUserNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRulePurchaseToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUncheckedUpdateManyWithoutUserNestedInput
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchaseCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    RulePurchase?: RulePurchaseCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
    RulePurchase?: RulePurchaseUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RuleCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    RulePurchase?: RulePurchaseCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
    RulePurchase?: RulePurchaseUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleCreateOrConnectWithoutUserInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput>
  }

  export type RuleCreateManyUserInputEnvelope = {
    data: RuleCreateManyUserInput | RuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RulePurchaseCreateWithoutUserInput = {
    rule: RuleCreateNestedOneWithoutRulePurchaseInput
    purchase: PurchaseCreateNestedOneWithoutRulePurchaseInput
  }

  export type RulePurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    ruleId: number
    purchaseId: number
  }

  export type RulePurchaseCreateOrConnectWithoutUserInput = {
    where: RulePurchaseWhereUniqueInput
    create: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput>
  }

  export type RulePurchaseCreateManyUserInputEnvelope = {
    data: RulePurchaseCreateManyUserInput | RulePurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
  }

  export type SaleUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
  }

  export type SaleCreateOrConnectWithoutUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleCreateManyUserInputEnvelope = {
    data: SaleCreateManyUserInput | SaleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    amount?: FloatFilter<"Purchase"> | number
    asset?: StringFilter<"Purchase"> | string
    userId?: IntFilter<"Purchase"> | number
  }

  export type RuleUpsertWithWhereUniqueWithoutUserInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutUserInput, RuleUncheckedUpdateWithoutUserInput>
    create: XOR<RuleCreateWithoutUserInput, RuleUncheckedCreateWithoutUserInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutUserInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutUserInput, RuleUncheckedUpdateWithoutUserInput>
  }

  export type RuleUpdateManyWithWhereWithoutUserInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutUserInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: IntFilter<"Rule"> | number
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    updatedAt?: DateTimeFilter<"Rule"> | Date | string
    type?: StringFilter<"Rule"> | string
    condition?: JsonFilter<"Rule">
    userId?: IntFilter<"Rule"> | number
  }

  export type RulePurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: RulePurchaseWhereUniqueInput
    update: XOR<RulePurchaseUpdateWithoutUserInput, RulePurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<RulePurchaseCreateWithoutUserInput, RulePurchaseUncheckedCreateWithoutUserInput>
  }

  export type RulePurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: RulePurchaseWhereUniqueInput
    data: XOR<RulePurchaseUpdateWithoutUserInput, RulePurchaseUncheckedUpdateWithoutUserInput>
  }

  export type RulePurchaseUpdateManyWithWhereWithoutUserInput = {
    where: RulePurchaseScalarWhereInput
    data: XOR<RulePurchaseUpdateManyMutationInput, RulePurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutUserInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    updatedAt?: DateTimeFilter<"Sale"> | Date | string
    amount?: FloatFilter<"Sale"> | number
    asset?: StringFilter<"Sale"> | string
    userId?: IntFilter<"Sale"> | number
  }

  export type UserCreateWithoutPurchasesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    RuleToUser?: RuleCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseCreateNestedManyWithoutUserInput
    sales?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    RuleToUser?: RuleUncheckedCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseUncheckedCreateNestedManyWithoutUserInput
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type RulePurchaseCreateWithoutPurchaseInput = {
    rule: RuleCreateNestedOneWithoutRulePurchaseInput
    user: UserCreateNestedOneWithoutRulePurchaseToUserInput
  }

  export type RulePurchaseUncheckedCreateWithoutPurchaseInput = {
    id?: number
    ruleId: number
    userId: number
  }

  export type RulePurchaseCreateOrConnectWithoutPurchaseInput = {
    where: RulePurchaseWhereUniqueInput
    create: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type RulePurchaseCreateManyPurchaseInputEnvelope = {
    data: RulePurchaseCreateManyPurchaseInput | RulePurchaseCreateManyPurchaseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    RuleToUser?: RuleUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUpdateManyWithoutUserNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    RuleToUser?: RuleUncheckedUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUncheckedUpdateManyWithoutUserNestedInput
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RulePurchaseUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: RulePurchaseWhereUniqueInput
    update: XOR<RulePurchaseUpdateWithoutPurchaseInput, RulePurchaseUncheckedUpdateWithoutPurchaseInput>
    create: XOR<RulePurchaseCreateWithoutPurchaseInput, RulePurchaseUncheckedCreateWithoutPurchaseInput>
  }

  export type RulePurchaseUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: RulePurchaseWhereUniqueInput
    data: XOR<RulePurchaseUpdateWithoutPurchaseInput, RulePurchaseUncheckedUpdateWithoutPurchaseInput>
  }

  export type RulePurchaseUpdateManyWithWhereWithoutPurchaseInput = {
    where: RulePurchaseScalarWhereInput
    data: XOR<RulePurchaseUpdateManyMutationInput, RulePurchaseUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type UserCreateWithoutSalesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseCreateNestedManyWithoutUserInput
    RuleToUser?: RuleCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
    RuleToUser?: RuleUncheckedCreateNestedManyWithoutUserInput
    RulePurchaseToUser?: RulePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
    RuleToUser?: RuleUncheckedUpdateManyWithoutUserNestedInput
    RulePurchaseToUser?: RulePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RulePurchaseCreateManyRuleInput = {
    id?: number
    purchaseId: number
    userId: number
  }

  export type RulePurchaseUpdateWithoutRuleInput = {
    purchase?: PurchaseUpdateOneRequiredWithoutRulePurchaseNestedInput
    user?: UserUpdateOneRequiredWithoutRulePurchaseToUserNestedInput
  }

  export type RulePurchaseUncheckedUpdateWithoutRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RulePurchaseUncheckedUpdateManyWithoutRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
  }

  export type RuleCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    condition: JsonNullValueInput | InputJsonValue
  }

  export type RulePurchaseCreateManyUserInput = {
    id?: number
    ruleId: number
    purchaseId: number
  }

  export type SaleCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    asset: string
  }

  export type PurchaseUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    RulePurchase?: RulePurchaseUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    RulePurchase?: RulePurchaseUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type RuleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    RulePurchase?: RulePurchaseUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
    RulePurchase?: RulePurchaseUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    condition?: JsonNullValueInput | InputJsonValue
  }

  export type RulePurchaseUpdateWithoutUserInput = {
    rule?: RuleUpdateOneRequiredWithoutRulePurchaseNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutRulePurchaseNestedInput
  }

  export type RulePurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type RulePurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
  }

  export type RulePurchaseCreateManyPurchaseInput = {
    id?: number
    ruleId: number
    userId: number
  }

  export type RulePurchaseUpdateWithoutPurchaseInput = {
    rule?: RuleUpdateOneRequiredWithoutRulePurchaseNestedInput
    user?: UserUpdateOneRequiredWithoutRulePurchaseToUserNestedInput
  }

  export type RulePurchaseUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RulePurchaseUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}