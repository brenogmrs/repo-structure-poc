import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';
export declare class CheckService {
    private readonly healthService;
    constructor(healthService: HealthCheckService);
    execute(): Promise<HealthCheckResult>;
}
