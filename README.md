# Contact Application

### Requirement

- node 14.0+
- mongodb

### Installation
- `npm install`

### Commands
- `npm start`
- `npm test`

### Environment variables
- *DB_URL* -> mongodb connection url
- *SECRET* -> jwt token secret

### Routes
#### Auth
- POST /auth/register
- POST /auth/login
- POST /auth/refresh
#### Contacts
- GET /contacts
- GET /contacts/{id}
- POST /contacts
- PUT /contacts/{id}
- DELETE /contacts/{id}
