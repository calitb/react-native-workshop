[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/client)

# Workshop: Jump Start React Native Development

Project with custom dev client to use third party native libraries (MapBox)

## Setup

### Step 1: Configure Expo

Install EXPO CLI and EAS CLI:

```shell
npm install -g expo-cli
npm install -g eas-cli
```

## Building the custom Expo Dev Client

### Setup EAS

```
eas build:configure
```

and add the displayed `projectId` in your `app.json`.

### Register your device

To be able to use the custom Dev client in an iOS device, you need to register that device. Run the following to register your device.

```
eas device:create
```

### Building the dev client

```
eas build --profile development --platform ios
```

Wait for the build to be completed, and install it in your devices.


## Configuring the project

### Set your environment variables

Create an `.env` file and set your Mapbox token:

```
MAPBOX_TOKEN=YOUR_TOKEN
```

## Running the App

### Start Expo

```shell
npm start
```
