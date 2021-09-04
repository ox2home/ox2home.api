## Documentation on API

This API is a response from software engineers for current covid-19 situation in Burma. People are dying everyday due to the lack of oxygen and the military junta's sanctions. Tens of thousands of people are in need to oxygen 25 hours a day and they are struggling to get one. This Restful API shows locations via latitude, longitude and other important information on getting oxygen in Myanmar.

## Major API Endpoints

Main URL : `ox2home-api.herokuapp.com`

### Oxygen Providers

```
Oxygen providers endpoint

GET -> /api/markers
GET -> /api/markers/active
POST -> /api/marker
PUT -> /api/marker/:markerId
```

#### Notes on Restful Operations and Marker prop types

###### GET

You can fetch the data from 2 api endpoints, one is getting all markers from `/api/markers` and another one is only **active** markers at `/api/markers/active`. Active markers will have `active : 1` and the one that are not active will have `active : 0`.

###### POST

If you want to add marker by yourself, this is the payload that you will need to send to the api.

```typescript
interface payload = {
  title         : string
  address       : string
  phoneNumbers  : string[]
  latitude      : number
  longitude     : number
};
```

##### Marker propTypes

```typescript

title         : string
address       : string
phoneNumbers  : string[]
latitude      : number
longitude     : number
active        : number
markerId      : number
```

### Product Providers

```
Product providers endpoint (Oximeters, flow meters, concentrators, etc)

GET -> /api/products
POST -> /api/produc
PUT -> /api/product/:uniqueId
```

#### Notes on Restful Operations and Product prop types

###### POST

If you want to add marker by yourself, this is the payload that you will need to send to the api. (for product)

```typescript
interface payload = {
  name          : string
  address       : string
  phoneNumbers  : string[]
  message       : string
  facebookLink  : string | ""
};
```

##### Product propTypes

```typescript
name          : string
address       : string
phoneNumbers  : string[]
message       : string
facebookLink  : string | ""
```
