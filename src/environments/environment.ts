// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'DEV',
  baseURL: 'http://localhost:8080/webyte/account/',
  patientURL: 'http://localhost:8080/patients/',
  doctorURL: 'http://localhost:8080/webyte/doctor/',
  deptURL: 'http://localhost:8080/webyte/dept/',
  newURL: 'http://localhost:8080/webyte/news/',
  dutyScheduleURL: 'http://localhost:8080/webyte/duty-schedule/',
  appointmentURL: 'http://localhost:8080/webyte/appointment-schedule/',
  paymentURL: 'http://localhost:8080/pay',
  rootURL: 'http://localhost:8080/',
  wsEndpoint: 'ws://localhost:8081/',
  RTCPeerConfiguration: {
    iceServers: [
      {
        urls: 'stun:stun1.l.google.com:19302'
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
