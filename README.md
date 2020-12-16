# Vue HTTP

- [Vue HTTP](#vue-http)
  - [Deployment](#deployment)
  - [Description](#description)
  - [Steps to setup firebase server](#steps-to-setup-firebase-server)
  - [Client communication](#client-communication)

## Deployment

- Checkout deployment at https://gagandeep39.github.io/vue-http-demo/

## Description

- Wau to communicate with the server

## Steps to setup firebase server

1. Go to [firebase](https://firebase.google.com/)
2. Create account/Login
3. Create a new Project
4. Go to Realtime Database (Not firestore)

## Client communication

- `axios` is one f he best tool for http comunication
  - npm install --save axios
- URL can be given using env
- Enviroment variables must be prefixed with `VUE_APP_`
- Axios methods
  - `axios.get(URL);`
  - `axios.post(URL, data)`
