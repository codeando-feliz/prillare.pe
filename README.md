State Management

> To add a piece of functionality follow the structure:

1. Start off with the constants
2. Create a new ```reducer``` and add it to the ```store.js```
3. Create an ```action``` to actually make a request to the backend
4. Replace ```useEffect``` logic (on the component screen), so it will fetch data from the action


## JSON Web Token

JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties.

Header + Payload + Signature

![JWT](https://github.com/the-code-loops/prillare.pe/tree/dev/src/jwt.png)

[Read More](https://medium.com/@sureshdsk/how-json-web-token-jwt-authentication-works-585c4f076033)