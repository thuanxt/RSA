import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'

import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';;

// Avoid name not found warnings
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth0Service {
    // Configure Auth0
    lock = new Auth0Lock('Ft7TEcsxUsqd4tAWwNhqAI1WC5A7mv2a', 'thuanxt.au.auth0.com', {});

    // constructor() {
    //     // Add callback for lock `authenticated` event
    //     this.lock.on('authenticated', (authResult) => {
    //         localStorage.setItem('id_token', authResult.idToken);
    //     })
    // }

    constructor(public router: Router) {
        this
            .router
            .events
            .filter(event => event.constructor.name === 'NavigationStart')
            .filter(event => (/access_token|id_token|error/).test(event.url))
            .subscribe(() => {
                this.lock.resumeAuth(window.location.hash, (error, authResult) => {
                    if (error) return console.log(error);
                    localStorage.setItem('id_token', authResult.idToken);
                    this.router.navigate(['/']);
                });
            });
    }

    public login() {
        // Display lock widget
        this.lock.show();
    }

    public authenticated() {
        // Check if there is an unexpired JWT
        return tokenNotExpired();
    }

    public logout() {
        // remove token from localStorage
        localStorage.removeItem('id_token');
    }
}
