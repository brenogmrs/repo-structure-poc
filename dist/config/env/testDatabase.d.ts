export declare const testDatabaseInfo: () => {
    name: string;
    type: string;
    database: string;
    migrationsRun: boolean;
    synchronize: boolean;
    entities: string[];
    autoLoadEntities: boolean;
};
