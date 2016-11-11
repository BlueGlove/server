# Server

## Usage

### GET /provider/:id/

```json
{
  "success": "ok",
  "provider": {
    id: "47294010573"
    name: "Phillip's Pancakes"
  }
}
```

### GET /provider/:id/consumers

```json
{
  "success": "ok",
  "provider": {
    id: 
  },
  "consumers": [
    {
      "id": "4827410574",
      "first_name": "Phillip",
      "last_name": "Pang",
      "created_at": "Thu Nov 10 2016 20:50:19 GMT-0800 (PST)",
      "total_revenue": 83.23
      "total_visits": 4
      "average_order_value": 20.81
    },
    {
      "id": "4829505733",
      "first_name": "Andy",
      "last_name": "Jiang",
      "created_at": "Thu Nov 10 2016 20:50:19 GMT-0800 (PST)",
      "total_revenue": 83.23
      "total_visits": 4
      "average_order_value": 20.81
    }
  ]
}
```

### POST /owners/:id/consumers

This is to send a coupon to consumers.

```
{

}
```

### GET /consumer/:id

```json
{
  "success": "ok",
  "id": "4827410574",
  "first_name": "Phillip",
  "last_name": "Pang",
  "created_at": "Thu Nov 10 2016 20:50:19 GMT-0800 (PST)",
  "total_revenue": 83.23
  "total_visits": 4
  "average_order_value": 20.81
}
```

### POST /consumer/:id

Request:

```json
{
  "consumer_id": "4829505733",
  "ibeacon_id": "8050384039",
  "sent_at": "Thu Nov 10 2016 20:50:19 GMT-0800 (PST)"
}
```

Response:

```json
{
  "success": "ok",
  "coupon": {
    "id": "8504059",
    "message": "Bring this to the counter for 20% off!",
    "qr_code_img_url": "https://blueglove.com/qr/4820491.png"
  }
}
```

