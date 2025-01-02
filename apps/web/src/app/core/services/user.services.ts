import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerPlugin from '../plugin/server.plugin';
import { IUser, ServerRequest, StorageType } from '@poveroh/types';
import StoragePlugin from '../plugin/storage.plugin';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private server = ServerPlugin();

    constructor(private http: HttpClient) {
        this.me(true).then((r) => {});
    }

    async me(readFromServer?: boolean): Promise<IUser> {
        const storage = new StoragePlugin(StorageType.LOCAL);

        let user: IUser;

        if (readFromServer) {
            user = await this.server.send<IUser>(
                ServerRequest.POST,
                '/user/me',
                {},
                'me'
            );

            storage.set('user', JSON.stringify(user));
        } else user = storage.parse<IUser>('user');

        return user;
    }

    async save(userToSave: any): Promise<boolean> {
        return await this.server.send<boolean>(
            ServerRequest.POST,
            '/user/save',
            userToSave,
            'save'
        );
    }

    fullName(reverse?: boolean): string {
        const storage = new StoragePlugin(StorageType.LOCAL);

        const user: IUser = storage.parse<IUser>('user');

        if (user == null) return '';

        return reverse
            ? `${user.surname} ${user.name}`
            : `${user.name} ${user.surname}`;
    }
}
