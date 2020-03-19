import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(userName: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { userName, password })
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user))
                }

                return user;
            }))
    }

    logOut() {
        localStorage.removeItem('currentUser')
    }

}
