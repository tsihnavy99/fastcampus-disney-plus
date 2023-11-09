### Fastcampus Disney Plus

배포(firebase Hosting): https://react-disney-plus-82ef3.web.app/

<br/>

#### firebase 추가
```cmd
$ npm install -g firebase
$ npm install -g firebase-tools
```

#### firebase 배포 시
```cmd
$ firebase login
$ npm run build
$ firebase init
  > Hoisting: Configure files ...
$ firebase deploy
```

<br/>

#### src/firebase.js (firebase api key)
아래 코드에서 사용되는 key값 등은 firebase에서 프로젝트 생성 후 web app add 시 제공
```js
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectID",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

const app = initializeApp(firebaseConfig);

export default app;
```
