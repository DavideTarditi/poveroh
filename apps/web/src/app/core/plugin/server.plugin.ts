import { environment } from '../../../environments/environment';
import axios, { AxiosError, AxiosResponse } from 'axios';
import notifyPlugin from './notify.plugin';
import { NotifyStatus, ServerRequest } from '@poveroh/types';

function ServerPlugin() {
    const status = async () => {
        return await send(
            ServerRequest.GET,
            environment.API_URL + '/status',
            null,
            'isAlive'
        );
    };

    function send<T>(
        type: ServerRequest,
        url: string,
        data: any,
        source: string
    ): Promise<T> {
        return new Promise<T>(async (resolve, reject) => {
            try {
                url = environment.API_URL + url;

                let res: AxiosResponse;
                switch (type) {
                    case ServerRequest.GET:
                        res = await axios.get(url);
                        break;
                    case ServerRequest.POST:
                        res = await axios.post(url, data, {
                            withCredentials: true,
                        });
                        break;
                    default:
                        throw new Error('Invalid request type');
                }

                if (res.status !== 200) {
                    throw new Error(res.data?.message || 'An error occurred');
                }

                resolve(res.data as T);
            } catch (error) {
                if (error instanceof Error) {
                    notifyPlugin().notifyHandleNotification({
                        status: NotifyStatus.ERROR,
                        description: error.message,
                    });
                } else if (error instanceof AxiosError) {
                    console.error(error);
                }

                reject(error);
            }
        });
    }

    return {
        status,
        send,
    };
}

export default ServerPlugin;
