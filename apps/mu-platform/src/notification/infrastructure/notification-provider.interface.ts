interface NotificationProviderInterface {
    keyProvider: string;
    sendNotification(taskId: number): boolean;
}