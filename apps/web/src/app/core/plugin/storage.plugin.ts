import { CookieOptions, StorageType } from '../types/storage';
import { environment } from '../../../environments/environment';

class StoragePlugin {
    storage: string | Storage;

    encryptionKey: string = environment.CRYPTO_KEY;
    storageType: StorageType | undefined;

    constructor(storageType: StorageType) {
        if (!Object.values(StorageType).includes(storageType)) {
            throw new Error(
                'Invalid storage type. Use: local, session, or cookie'
            );
        }

        this.storageType = storageType;

        switch (storageType) {
            case StorageType.LOCAL:
                this.storage = localStorage;
                break;
            case StorageType.SESSION:
                this.storage = sessionStorage;
                break;
            case StorageType.COOKIE:
                this.storage = document.cookie;
                break;
        }
    }

    set(key: string, value: any, options: CookieOptions | null): void {
        if (this.storageType === StorageType.COOKIE) {
            let cookieString: string = `${key}=${value}`;

            if (options != null) {
                const { expires, path, domain, secure } = options;

                if (expires)
                    cookieString += `; expires=${expires.toUTCString()}`;

                if (path) cookieString += `; path=${path}`;
                if (domain) cookieString += `; domain=${domain}`;
                if (secure) cookieString += '; secure';
            }

            document.cookie = cookieString;
        } else {
            (this.storage as Storage).setItem(key, value);
        }
    }

    get(key: string): string | null {
        let data;

        if (this.storageType === StorageType.COOKIE) {
            const cookies = document.cookie.split(';');
            const cookie = cookies.find((c) => c.trim().startsWith(key + '='));
            data = cookie ? cookie.split('=')[1].trim() : null;
        } else {
            data = (this.storage as Storage).getItem(key);
        }

        return data;
    }

    remove(key: string) {
        if (this.storageType === StorageType.COOKIE) {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        } else {
            (this.storage as Storage).removeItem(key);
        }
    }

    clear() {
        if (this.storageType === StorageType.COOKIE) {
            document.cookie.split(';').forEach((cookie) => {
                const key = cookie.split('=')[0].trim();
                this.remove(key);
            });
        } else {
            (this.storage as Storage).clear();
        }
    }

    getAllKeys() {
        if (this.storageType === StorageType.COOKIE) {
            return document.cookie
                .split(';')
                .map((cookie) => cookie.split('=')[0].trim())
                .filter((key) => key !== '');
        } else {
            return Object.keys(this.storage);
        }
    }

    has(key: string) {
        return this.get(key) !== null;
    }
}

export default StoragePlugin;
