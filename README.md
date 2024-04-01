# Haxplore-Error404

## Tech Stack used:
- Nodejs, MongoDB for Backend
- Reactjs, Tailwind Css for frontend

## To setup backend for development:

Run `npm i` to install dependencies
Run `npm run dev` to start the backend server.
Add .env in the backend folder:

PORT=3000
SECRET_KEY=zsdcvfrdcvbgfg
GOOGLE_CLIENT_ID=<Your CLIENT ID>
GOOGLE_CLIENT_SECRET=<CLIENT SECRET>
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=hasbjcefkhanadjajkfn
TWILIO_SID=
TWILIO_AUTH_TOKEN=
RAZORPAY_SECRET=
RAZORPAY_KEY_ID=
OPENAI_API_KEY=

## To setup frontend for development:

Run `npm i` to install dependencies
Run `npm run dev` to start the frontend server.
Add .env in the frontend:

VITE_BACKEND_URL=http://localhost:3000
VITE_CLIENT_ID=<Your CLIENT ID>
VITE_RAZORPAY_KEY=
VITE_FRONTEND_URL=http://localhost:5173

