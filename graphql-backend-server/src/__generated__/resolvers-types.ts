import { GraphQLResolveInfo } from 'graphql';
import { ContextValue } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Coordinates = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
};

export type CurrentWeatherInfo = {
  __typename?: 'CurrentWeatherInfo';
  cloud?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<WeatherCondition>;
  feelslike_c?: Maybe<Scalars['Float']['output']>;
  feelslike_f?: Maybe<Scalars['Float']['output']>;
  gust_kph?: Maybe<Scalars['Float']['output']>;
  gust_mph?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Int']['output']>;
  is_day?: Maybe<Scalars['Int']['output']>;
  last_updated?: Maybe<Scalars['String']['output']>;
  precip_in?: Maybe<Scalars['Float']['output']>;
  precip_mm?: Maybe<Scalars['Float']['output']>;
  pressure_in?: Maybe<Scalars['Float']['output']>;
  pressure_mb?: Maybe<Scalars['Float']['output']>;
  temp_c?: Maybe<Scalars['Float']['output']>;
  temp_f?: Maybe<Scalars['Float']['output']>;
  uv?: Maybe<Scalars['Float']['output']>;
  vis_km?: Maybe<Scalars['Float']['output']>;
  vis_miles?: Maybe<Scalars['Float']['output']>;
  wind_degree?: Maybe<Scalars['Int']['output']>;
  wind_dir?: Maybe<Scalars['String']['output']>;
  wind_kph?: Maybe<Scalars['Float']['output']>;
  wind_mph?: Maybe<Scalars['Float']['output']>;
};

export type DayWeatherInfo = {
  __typename?: 'DayWeatherInfo';
  avghumidity?: Maybe<Scalars['Float']['output']>;
  avgtemp_c?: Maybe<Scalars['Float']['output']>;
  avgtemp_f?: Maybe<Scalars['Float']['output']>;
  avgvis_km?: Maybe<Scalars['Float']['output']>;
  avgvis_miles?: Maybe<Scalars['Float']['output']>;
  condition?: Maybe<WeatherCondition>;
  daily_chance_of_rain?: Maybe<Scalars['Int']['output']>;
  daily_chance_of_snow?: Maybe<Scalars['Int']['output']>;
  daily_will_it_rain?: Maybe<Scalars['Int']['output']>;
  daily_will_it_snow?: Maybe<Scalars['Int']['output']>;
  maxtemp_c?: Maybe<Scalars['Float']['output']>;
  maxtemp_f?: Maybe<Scalars['Float']['output']>;
  maxwind_kph?: Maybe<Scalars['Float']['output']>;
  maxwind_mph?: Maybe<Scalars['Float']['output']>;
  mintemp_c?: Maybe<Scalars['Float']['output']>;
  mintemp_f?: Maybe<Scalars['Float']['output']>;
  totalprecip_in?: Maybe<Scalars['Float']['output']>;
  totalprecip_mm?: Maybe<Scalars['Float']['output']>;
  totalsnow_cm?: Maybe<Scalars['Float']['output']>;
  uv?: Maybe<Scalars['Float']['output']>;
};

export type Forecast = {
  __typename?: 'Forecast';
  forecastday?: Maybe<Array<Maybe<ForecastDayWeatherInfo>>>;
};

export type ForecastDayWeatherInfo = {
  __typename?: 'ForecastDayWeatherInfo';
  date?: Maybe<Scalars['String']['output']>;
  day?: Maybe<DayWeatherInfo>;
  hour?: Maybe<Array<Maybe<HourWeatherInfo>>>;
};

export type ForecastInput = {
  days?: InputMaybe<Scalars['Int']['input']>;
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
};

export type ForecastWeatherInfo = {
  __typename?: 'ForecastWeatherInfo';
  current?: Maybe<CurrentWeatherInfo>;
  forecast?: Maybe<Forecast>;
  location?: Maybe<Location>;
};

export type GeoLocationInfo = {
  __typename?: 'GeoLocationInfo';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  regionName?: Maybe<Scalars['String']['output']>;
};

export type HourWeatherInfo = {
  __typename?: 'HourWeatherInfo';
  chance_of_rain?: Maybe<Scalars['Int']['output']>;
  chance_of_snow?: Maybe<Scalars['Int']['output']>;
  cloud?: Maybe<Scalars['Int']['output']>;
  condition?: Maybe<WeatherCondition>;
  dewpoint_c?: Maybe<Scalars['Float']['output']>;
  dewpoint_f?: Maybe<Scalars['Float']['output']>;
  feelslike_c?: Maybe<Scalars['Float']['output']>;
  feelslike_f?: Maybe<Scalars['Float']['output']>;
  gust_kph?: Maybe<Scalars['Float']['output']>;
  gust_mph?: Maybe<Scalars['Float']['output']>;
  heatindex_c?: Maybe<Scalars['Float']['output']>;
  heatindex_f?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Int']['output']>;
  is_day?: Maybe<Scalars['Int']['output']>;
  precip_in?: Maybe<Scalars['Float']['output']>;
  precip_mm?: Maybe<Scalars['Float']['output']>;
  pressure_in?: Maybe<Scalars['Float']['output']>;
  pressure_mb?: Maybe<Scalars['Float']['output']>;
  temp_c?: Maybe<Scalars['Float']['output']>;
  temp_f?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  uv?: Maybe<Scalars['Float']['output']>;
  vis_km?: Maybe<Scalars['Float']['output']>;
  vis_miles?: Maybe<Scalars['Float']['output']>;
  will_it_rain?: Maybe<Scalars['Int']['output']>;
  will_it_snow?: Maybe<Scalars['Int']['output']>;
  wind_degree?: Maybe<Scalars['Int']['output']>;
  wind_dir?: Maybe<Scalars['String']['output']>;
  wind_kph?: Maybe<Scalars['Float']['output']>;
  wind_mph?: Maybe<Scalars['Float']['output']>;
  windchill_c?: Maybe<Scalars['Float']['output']>;
  windchill_f?: Maybe<Scalars['Float']['output']>;
};

export type Location = {
  __typename?: 'Location';
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  localtime?: Maybe<Scalars['String']['output']>;
  localtime_epoch?: Maybe<Scalars['Int']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  tz_id?: Maybe<Scalars['String']['output']>;
};

export type LocationSuggestion = {
  __typename?: 'LocationSuggestion';
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getForecastInfo?: Maybe<ForecastWeatherInfo>;
  getSuggestions?: Maybe<Array<Maybe<LocationSuggestion>>>;
  getUserLocation?: Maybe<GeoLocationInfo>;
  getWeatherInfo?: Maybe<WeatherInfo>;
};


export type QueryGetForecastInfoArgs = {
  forecastInput?: InputMaybe<ForecastInput>;
};


export type QueryGetSuggestionsArgs = {
  prompt?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetWeatherInfoArgs = {
  coordinates?: InputMaybe<Coordinates>;
};

export type WeatherCondition = {
  __typename?: 'WeatherCondition';
  code?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type WeatherInfo = {
  __typename?: 'WeatherInfo';
  current?: Maybe<CurrentWeatherInfo>;
  location?: Maybe<Location>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Coordinates: Coordinates;
  CurrentWeatherInfo: ResolverTypeWrapper<CurrentWeatherInfo>;
  DayWeatherInfo: ResolverTypeWrapper<DayWeatherInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Forecast: ResolverTypeWrapper<Forecast>;
  ForecastDayWeatherInfo: ResolverTypeWrapper<ForecastDayWeatherInfo>;
  ForecastInput: ForecastInput;
  ForecastWeatherInfo: ResolverTypeWrapper<ForecastWeatherInfo>;
  GeoLocationInfo: ResolverTypeWrapper<GeoLocationInfo>;
  HourWeatherInfo: ResolverTypeWrapper<HourWeatherInfo>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Location: ResolverTypeWrapper<Location>;
  LocationSuggestion: ResolverTypeWrapper<LocationSuggestion>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  WeatherCondition: ResolverTypeWrapper<WeatherCondition>;
  WeatherInfo: ResolverTypeWrapper<WeatherInfo>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Coordinates: Coordinates;
  CurrentWeatherInfo: CurrentWeatherInfo;
  DayWeatherInfo: DayWeatherInfo;
  Float: Scalars['Float']['output'];
  Forecast: Forecast;
  ForecastDayWeatherInfo: ForecastDayWeatherInfo;
  ForecastInput: ForecastInput;
  ForecastWeatherInfo: ForecastWeatherInfo;
  GeoLocationInfo: GeoLocationInfo;
  HourWeatherInfo: HourWeatherInfo;
  Int: Scalars['Int']['output'];
  Location: Location;
  LocationSuggestion: LocationSuggestion;
  Query: {};
  String: Scalars['String']['output'];
  WeatherCondition: WeatherCondition;
  WeatherInfo: WeatherInfo;
}>;

export type CurrentWeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['CurrentWeatherInfo'] = ResolversParentTypes['CurrentWeatherInfo']> = ResolversObject<{
  cloud?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['WeatherCondition']>, ParentType, ContextType>;
  feelslike_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feelslike_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gust_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gust_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  precip_in?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip_mm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pressure_in?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pressure_mb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis_miles?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_degree?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DayWeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['DayWeatherInfo'] = ResolversParentTypes['DayWeatherInfo']> = ResolversObject<{
  avghumidity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgtemp_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgtemp_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgvis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgvis_miles?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['WeatherCondition']>, ParentType, ContextType>;
  daily_chance_of_rain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  daily_chance_of_snow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  daily_will_it_rain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  daily_will_it_snow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxtemp_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxtemp_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxwind_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxwind_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mintemp_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mintemp_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalprecip_in?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalprecip_mm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalsnow_cm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Forecast'] = ResolversParentTypes['Forecast']> = ResolversObject<{
  forecastday?: Resolver<Maybe<Array<Maybe<ResolversTypes['ForecastDayWeatherInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastDayWeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['ForecastDayWeatherInfo'] = ResolversParentTypes['ForecastDayWeatherInfo']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['DayWeatherInfo']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<Array<Maybe<ResolversTypes['HourWeatherInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForecastWeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['ForecastWeatherInfo'] = ResolversParentTypes['ForecastWeatherInfo']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['CurrentWeatherInfo']>, ParentType, ContextType>;
  forecast?: Resolver<Maybe<ResolversTypes['Forecast']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoLocationInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['GeoLocationInfo'] = ResolversParentTypes['GeoLocationInfo']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  regionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HourWeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['HourWeatherInfo'] = ResolversParentTypes['HourWeatherInfo']> = ResolversObject<{
  chance_of_rain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chance_of_snow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cloud?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['WeatherCondition']>, ParentType, ContextType>;
  dewpoint_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dewpoint_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feelslike_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feelslike_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gust_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gust_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heatindex_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heatindex_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  humidity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  is_day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  precip_in?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  precip_mm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pressure_in?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pressure_mb?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vis_miles?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  will_it_rain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  will_it_snow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_degree?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wind_dir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wind_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wind_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  windchill_c?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  windchill_f?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  localtime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localtime_epoch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tz_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationSuggestionResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['LocationSuggestion'] = ResolversParentTypes['LocationSuggestion']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lon?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getForecastInfo?: Resolver<Maybe<ResolversTypes['ForecastWeatherInfo']>, ParentType, ContextType, Partial<QueryGetForecastInfoArgs>>;
  getSuggestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocationSuggestion']>>>, ParentType, ContextType, Partial<QueryGetSuggestionsArgs>>;
  getUserLocation?: Resolver<Maybe<ResolversTypes['GeoLocationInfo']>, ParentType, ContextType>;
  getWeatherInfo?: Resolver<Maybe<ResolversTypes['WeatherInfo']>, ParentType, ContextType, Partial<QueryGetWeatherInfoArgs>>;
}>;

export type WeatherConditionResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['WeatherCondition'] = ResolversParentTypes['WeatherCondition']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WeatherInfoResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['WeatherInfo'] = ResolversParentTypes['WeatherInfo']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['CurrentWeatherInfo']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ContextValue> = ResolversObject<{
  CurrentWeatherInfo?: CurrentWeatherInfoResolvers<ContextType>;
  DayWeatherInfo?: DayWeatherInfoResolvers<ContextType>;
  Forecast?: ForecastResolvers<ContextType>;
  ForecastDayWeatherInfo?: ForecastDayWeatherInfoResolvers<ContextType>;
  ForecastWeatherInfo?: ForecastWeatherInfoResolvers<ContextType>;
  GeoLocationInfo?: GeoLocationInfoResolvers<ContextType>;
  HourWeatherInfo?: HourWeatherInfoResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationSuggestion?: LocationSuggestionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WeatherCondition?: WeatherConditionResolvers<ContextType>;
  WeatherInfo?: WeatherInfoResolvers<ContextType>;
}>;

