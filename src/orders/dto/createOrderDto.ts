import { ArrayNotEmpty, IsBoolean, IsNumber, IsString } from 'class-validator';
import { ProductDto } from './productDto';

export class CreateOrderDto {
	@IsString()
	customer_name: string;

	@IsString()
	phone: string;

	@IsBoolean()
	usedelivery: boolean;

	@IsString()
	city: string;

	@IsString()
	department: string;

	@ArrayNotEmpty()
	products: ProductDto[];

	@IsNumber()
	price: number;
}
