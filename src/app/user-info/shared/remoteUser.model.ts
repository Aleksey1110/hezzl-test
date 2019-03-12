export interface RemoteUser {
    operationId: string;
    campaignName: string;
    playerId: number;
    playerName: string;
    playerEmail: string;
    playerPhone: string;
    playerGender: string;
    playerCity: string;
    playerScore: number;
    playerCoins: number;
    rewardName: string;
    rewardCoupon: string;
    taskName: string;
    taskType: string;
    taskCode: string;
    receivedCoins: number;
    receivedScore: number;
    operationType: number;
    operationTypeName: string;
    ip: string;
    userAgent: string;
    createdAt: Date;
}
