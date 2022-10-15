[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/client)

# Workshop: Jump Start React Native Development

Project that shows Github automations and usage of EAS Build, EAS Update and EAS Submit.

## Setup

### Step 1: Configure Expo

Install EXPO CLI and EAS CLI:

```shell
npm install -g expo-cli
npm install -g eas-cli
```

## Building the custom Expo Dev Client

### Setup EAS

Delete the `extra` key in the `app.json` file, then run

```
eas build:configure
```

and add the correct `projectId` to your `app.json`. (You should commit this change in your repository)

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


##### Note. Once this is done in your local terminal, you can run the github workflow 


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

### Run Typescript check

```shell
npm run ts
```