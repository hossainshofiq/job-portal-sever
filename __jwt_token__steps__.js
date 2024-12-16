/**
 * 1. after successfull login: generate a jwt token
 * npm i jsonwebtoken, cokie-parser
 * jwt.sign(payload, secret, {expireIn: '1d'})
 * 
 * 2. send token (generate in the server side) to the client side
 * local storagae --> easier
 * 
 * httpOnly cookies --> better
 * 
 * 3. for sensitive of secure of private fo protected apis: send token to the server side
 * 
 * on the server side
 *   app.use(cors({
     origin: ['http://localhost:5173'],
     credentials: true,
     }));
 * 
    in the client side: 
    use axios get, post, delete, patch for secure apis and must use: {withCredentials: true}
    
 * 4. validte the token in the server side:
 * if valid: provide data
 * if not valid: logout
 * 
 * 
 */