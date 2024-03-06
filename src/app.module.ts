import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { PricesModule } from './prices/prices.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTelegramConfig } from './config/getTelegramConfig';
import { OrdersModule } from './orders/orders.module';

@Module({
	imports: [
		PrismaModule,
		ProductsModule,
		PricesModule,
		TelegramModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTelegramConfig,
		}),
		ConfigModule.forRoot(),
		OrdersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
