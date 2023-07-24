// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// // Google OAuth configuration
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: 'your-google-client-id',
//       clientSecret: 'your-google-client-secret',
//       callbackURL: 'http://localhost:3000/auth/google/callback', // Adjust the callback URL accordingly
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // Check if the user already exists in the database based on their Google ID
//         const existingUser = await User.findOne({ googleId: profile.id });

//         if (existingUser) {
//           return done(null, existingUser);
//         }

//         // If the user doesn't exist, create a new user in the database
//         const newUser = await User.create({ googleId: profile.id });
//         return done(null, newUser);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// // Serialize and deserialize the user to maintain the login session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// // Initialize Passport and restore authentication state if available from the session
// app.use(passport.initialize());
// app.use(passport.session());

// // Google OAuth routes
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Redirect the user after successful authentication
//     res.redirect('/dashboard'); // Replace with the desired redirect URL
//   }
// );

// // Regular email/password login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UuserModel.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials.' });
//     }

//     const isPasswordValid = await user.comparePassword(password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid credentials.' });
//     }

//     return res.status(200).json({ message: 'Login successful.' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server error.' });
//   }
// });
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAIXRtxfBzrIhFlNJ2am3NNLpWYTI7katU",
//   authDomain: "auth2-2e73b.firebaseapp.com",
//   projectId: "auth2-2e73b",
//   storageBucket: "auth2-2e73b.appspot.com",
//   messagingSenderId: "874714255394",
//   appId: "1:874714255394:web:75996178b106497b01fa7b",
//   measurementId: "G-86GBMYJ3WB"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);