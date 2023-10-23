/**                                 ----------------------
 *                                  INITIAL SETUP FIREBASE
 *                                  ----------------------
 * 
 * 1. visit: console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.Register app(create config)
 * 4.install firebase (npm install firebase)
 * 5.add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *                          -----------
 *                          Integration
 *                          ------------
 * 7.Visit: Got to Docs > Build > Authentication > Web > Get Started
 * 8. export app form the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *                          --------------
 *                          Provider Setup
 *                          ---------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth provider
 * 13. activate sign-in method : project >  build > Authentication > sign-in method > add new provider (google,facebook,github etc.)
 * 14. setting > Authorized domain
 * 15. [vite]: change 127.0.01 to localhost
 *                          ------------------
 *                          More Auth Provider
 *                          -------------------
 * 1. active the auth provider(create app, provide redirect url,client id. client secret)
 * 2.
 *  */