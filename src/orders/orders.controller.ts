import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/createOrderDto';
import { TelegramService } from 'src/telegram/telegram.service';
import { message } from './createMessage';

@Controller('orders')
export class OrdersController {
	constructor(
		private readonly ordersService: OrdersService,
		private readonly telegramService: TelegramService,
	) {}

	@HttpCode(201)
	@Post('create')
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: CreateOrderDto) {
		const order = await this.ordersService.createOrder(dto);
		for (const product of dto.products) {
			const order_details = await this.ordersService.createOrderDetails(order.id, product);
			order.order_details.push(order_details);
		}
		const messageTemplate = message(order);
		await this.telegramService.sendMessage(messageTemplate);
		return order;
	}
}
