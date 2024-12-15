import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { LOGIN } from '../graphql/user.queries';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apollo: Apollo) {}

    login(email: string, password: string): Observable<any> {
        return this.apollo.watchQuery({
            query: LOGIN,
            variables: { email, password },
        }).valueChanges;
    }
}
