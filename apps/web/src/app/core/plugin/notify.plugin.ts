import { Notyf } from 'notyf';
import { INotifyMessage, NotifyStatus } from '../types/notify';

function notifyPlugin() {
    const notyf = new Notyf({
        duration: 20000,
        ripple: true,
        position: {
            x: 'center',
            y: 'bottom',
        },
        types: [
            {
                type: 'success',
                background: '#198754',
                duration: 5000,
                dismissible: true,
            },
            {
                type: 'error',
                background: '#D92626',
                duration: 20000,
                dismissible: false,
            },
            {
                type: 'warning',
                background: '#f89406',
                duration: 20000,
                dismissible: true,
            },
            {
                type: 'info',
                background: '#f89406',
                duration: 20000,
                dismissible: true,
            },
            {
                type: 'custom',
                background: '#483B44',
                duration: 0,
                dismissible: false,
            },
        ],
    });

    const dismissAll = () => {
        notyf.dismissAll();
    };

    const handleNotification = (message: INotifyMessage) => {
        switch (message.status) {
            case NotifyStatus.ERROR:
                notyf.error(message.description);
                break;
            case NotifyStatus.SUCCESS:
                notyf.success(message.description);
                break;
            case NotifyStatus.INFO:
                notyf.open({ type: 'info', message: message.description });
                break;
        }
    };

    return {
        notify: notyf,
        notifyDismissAll: dismissAll,
        notifyHandleNotification: handleNotification,
    };
}

export default notifyPlugin;
