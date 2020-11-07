var oauthserver = require("oauth2-server");

app.oauth = oauthserver({
  model: model,
  grants: ["auth_code", "password", "refresh_token"],
  debug: true,
  accessTokenLifetime: model.accessTokenLifetime,
});

app.all("/oauth/token", app.oauth.grant());

app.get("/secret", app.oauth.authorise(), function (req, res) {
  // Will require a valid access_token
  res.send("Secret area");
});

app.use(app.oauth.errorHandler());

var jwt = require("jsonwebtoken");

var Schema = mongoose.Schema;
var model = module.exports;

model.accessTokenLifetime = 20;

// JWT secret key
var secretKey = "sample secret key";

// Mongoose schemas

var OAuthRefreshTokenSchema = new Schema({
  refreshToken: { type: String },
  clientId: { type: String },
  userId: { type: String },
  expires: { type: Date },
});

var OAuthClientSchema = new Schema({
  clientId: { type: String },
  clientSecret: { type: String },
  redirectUri: { type: String },
});

var OAuthUserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, default: "" },
});

mongoose.model("OAuthRefreshToken", OAuthRefreshTokenSchema);
mongoose.model("OAuthClient", OAuthClientSchema);
mongoose.model("OAuthUser", OAuthUserSchema);

var OAuthRefreshTokensModel = mongoose.model("OAuthRefreshToken"),
  OAuthClientsModel = mongoose.model("OAuthClient"),
  OAuthUsersModel = mongoose.model("OAuthUser");

// The following functions customize the behavior of oauth2-server

/* Token functions */
model.getAccessToken = function (bearerToken, callback) {
  console.log("in getAccessToken (bearerToken: " + bearerToken + ")");

  try {
    var decoded = jwt.verify(bearerToken, secretKey, {
      ignoreExpiration: true, //handled by OAuth2 server implementation
    });
    callback(null, {
      accessToken: bearerToken,
      clientId: decoded.sub,
      userId: decoded.user,
      expires: new Date(decoded.exp * 1000),
    });
  } catch (e) {
    callback(e);
  }
};

model.saveAccessToken = function (token, clientId, expires, userId, callback) {
  console.log(
    "in saveAccessToken (token: " +
      token +
      ", clientId: " +
      clientId +
      ", userId: " +
      userId.id +
      ", expires: " +
      expires +
      ")"
  );

  //No need to store JWT tokens.
  console.log(jwt.decode(token, secretKey));

  callback(null);
};

model.generateToken = function (type, req, callback) {
  //Use the default implementation for refresh tokens
  console.log("generateToken: " + type);
  if (type === "refreshToken") {
    callback(null, null);
    return;
  }

  //Use JWT for access tokens
  var token = jwt.sign(
    {
      user: req.user.id,
    },
    secretKey,
    {
      expiresIn: model.accessTokenLifetime,
      subject: req.client.clientId,
    }
  );

  callback(null, token);
};

model.saveRefreshToken = function (token, clientId, expires, userId, callback) {
  console.log(
    "in saveRefreshToken (token: " +
      token +
      ", clientId: " +
      clientId +
      ", userId: " +
      userId.id +
      ", expires: " +
      expires +
      ")"
  );

  var refreshToken = new OAuthRefreshTokensModel({
    refreshToken: token,
    clientId: clientId,
    userId: userId.id,
    expires: expires,
  });

  refreshToken.save(callback);
};

model.getRefreshToken = function (refreshToken, callback) {
  console.log("in getRefreshToken (refreshToken: " + refreshToken + ")");

  OAuthRefreshTokensModel.findOne({ refreshToken: refreshToken }, callback);
};

model.getClient = function (clientId, clientSecret, callback) {
  console.log(
    "in getClient (clientId: " +
      clientId +
      ", clientSecret: " +
      clientSecret +
      ")"
  );
  if (clientSecret === null) {
    return OAuthClientsModel.findOne({ clientId: clientId }, callback);
  }
  OAuthClientsModel.findOne(
    {
      clientId: clientId,
      clientSecret: clientSecret,
    },
    callback
  );
};

model.grantTypeAllowed = function (clientId, grantType, callback) {
  console.log(
    "in grantTypeAllowed (clientId: " +
      clientId +
      ", grantType: " +
      grantType +
      ")"
  );

  // Authorize all clients to use all grants.
  callback(false, true);
};

model.getUser = function (username, password, callback) {
  console.log(
    "in getUser (username: " + username + ", password: " + password + ")"
  );

  OAuthUsersModel.findOne({ username: username, password: password }, function (
    err,
    user
  ) {
    if (err) return callback(err);
    console.log("User id: " + user._id);
    callback(null, user._id);
  });
};
