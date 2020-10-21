
export class DefaultNotificationProvider implements NotificationProviderInterface{
    keyProvider: string = 'DefaultNotificationProvider';

    sendNotification(taskId: number): boolean {
        throw new Error('Method not implemented.');
    }

}