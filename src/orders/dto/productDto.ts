import { IsBoolean, IsNumber } from 'class-validator';

export class ProductDto {
	@IsNumber()
	id: number;

	@IsNumber()
	price: number;

	@IsNumber()
	height: number;

	@IsNumber()
	width: number;

	@IsBoolean()
	isfinished: boolean;
}
