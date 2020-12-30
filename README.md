## Server API

### Get listings info
  * GET `/api/listing/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "images": ["String"],
      "address": {
        "street": "String",
        "city": "String",
        "state": "String",
        "zip": "String",
      },
      "tags": {
        "new": "Boolean",
        "sale": "Boolean",
        "sold": "Boolean",
      },
      "price": "Number",
    }
```

### Add restaurant
  * POST `/api/listing`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "images": ["String"],
      "address": {
        "street": "String",
        "city": "String",
        "state": "String",
        "zip": "String",
      },
      "tags": {
        "new": "Boolean",
        "sale": "Boolean",
        "sold": "Boolean",
      },
      "price": "Number",
    }
```


### Update restaurant info
  * PATCH `/api/listing/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "id": "Number",
      "images": ["String"],
      "address": {
        "street": "String",
        "city": "String",
        "state": "String",
        "zip": "String",
      },
      "tags": {
        "new": "Boolean",
        "sale": "Boolean",
        "sold": "Boolean",
      },
      "price": "Number",
    }
```

### Delete restaurant
  * DELETE `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

### Add image to restaurant
  * POST `/api/restaurants/:restaurantId/images`

**Path Parameters:**

  * `restaurantId` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user": "String",
      "image": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "restaurant": "id Number",
      "cost": "Number"
    }
```
# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Style Guide

Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).