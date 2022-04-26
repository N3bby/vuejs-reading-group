"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const fs_1 = require("fs");
const properties = JSON.parse((0, fs_1.readFileSync)('config/properties.json').toString());
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({ secret: 'Secret' }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: properties.google.clientId,
    clientSecret: properties.google.clientSecret,
    callbackURL: properties.google.callbackUrl,
}, (accessToken, refreshToken, profile, cb) => {
}));
app.get('/api/login', passport_1.default.authenticate('google', { scope: ['profile'] }));
app.get('/api/oidc-callback', (req, res) => {
    console.log(req.body);
    console.log(req);
});
// app.get('/api/oidc-callback',
//     passport.authenticate('google', {
//         successRedirect: '/',
//         failureRedirect: '/failed'
//     }));
app.listen(3000);
