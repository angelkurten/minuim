import { Injectable } from '@nestjs/common';
import { DefaultNotificationProvider } from '../providers/default-notification.provider';


export class NotificationFactory {

    providers: { [key: string]: NotificationProviderInterface } = {
        'default': new DefaultNotificationProvider()
    };

    createProvider(name: string): NotificationProviderInterface {
        return this.providers[name]
    }
}