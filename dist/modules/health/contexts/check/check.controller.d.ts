import { HealthCheckResult } from '@nestjs/terminus';
import { CheckService } from './check.service';
export declare class CheckController {
    private readonly service;
    constructor(service: CheckService);
    index(): Promise<HealthCheckResult>;
}
