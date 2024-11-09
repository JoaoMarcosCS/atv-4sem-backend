import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { InjectDataSource, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            logging: true,
            url: "postgresql://postgres.roppmcevdknqpcifgkfh:2YN1IUxkEfz1QaNC@aws-0-us-west-1.pooler.supabase.com:6543/postgres",
            entities: [__dirname + '/entities/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],

})

export class DatabaseModule implements OnModuleInit {
    private readonly logger = new Logger(DatabaseModule.name);

    constructor(@InjectDataSource() private dataSource: DataSource) { }

    async onModuleInit() {
        try {
            // Verifica se a conexão está estabelecida corretamente
            this.logger.log('Database connection established successfully!');

            // Loga as entidades carregadas
            const entities = this.dataSource.entityMetadatas.map((entity) => entity.name);
            this.logger.log(`Loaded entities: ${entities.join(', ')}`);
        } catch (error) {
            this.logger.error('Error during database initialization', error);
        }
    }
}
