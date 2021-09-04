## API ၏ စာတမ်းများ

ဒီ API က မြန်မာနိုင်ငံရဲ့ covid-19 ပေါ် အခြေပြုပြီး oxygen ရောင်းတဲ့နေရာတို့ ပြန်ဖြည့်ပေးတဲ့နေရာတို့ကို data source ၁ ခုထဲကလာအောင် စုပေးထားတဲ့ Restful API ပဲဖြစ်ပါတယ်. မြန်မာနိုင်ငံမှာ ၁ ရက် ၁ ရက် oxygen မရတဲ့လူနာတွေ ထောင်နဲ့ချီပါတယ်.

### အဓိက Endpoint များ

ဒီ API ရဲ့ main URL ကတော့ : `ox2home-api.herokuapp.com`

### Oxygen ရောင်း/ဖြန့်/ ငှား

```
Oxygen ရောင်း/ဖြန့်/ ငှား တဲ့နေရာတွေရဲ့ endpoint

GET -> /api/markers
GET -> /api/markers/active
POST -> /api/marker
PUT -> /api/marker/:markerId
```

#### Restful API docs နဲ့ Marker တွေရဲ့ prop Types

###### GET

အဓိက data ယူဖို့ point 2 ခုရှိပါတယ် ဒါက oxygen providers တွေရဲ့ endpoint ပါ. Endpoint အကုန်ကိုလိုချင်ရင်တော့ /​api/markers ပါ. Active ဖြစ်နေတဲ့ marker တွေပဲလိုချင်ရင်တော့ /api/markers/active ပါ. ဘာကွာလဲဆိုတော့ ကျနော်တို့ က နေရာတိုင်းကိုအချိန်တိုင်း checkup ဝင်ပေးနေပြီး oxygen မရတော့ရင် active ကို 0 ထားပြီး ရသေးရင် active ကို 1 ထားပေးထားတာပါ.

###### POST

ကိုယ့်ဘာကို data ထည့်ချင်ရင်တော့ ဒီ API payload အတိုင်း POST endpoint ကို request လှမ်းပို့ပေးပါ

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

GET -> /api/product
POST -> /api/product
PUT -> /api/product/:uniqueId
```

#### Restful API docs နဲ့ Product တွေရဲ့ prop Types

###### POST

ကိုယ့်ဘာကို data ထည့်ချင်ရင်တော့ ဒီ API payload အတိုင်း POST endpoint ကို request လှမ်းပို့ပေးပါ

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
