import { IsNumber, IsString, max } from 'class-validator';

export class CreateProductDto {
	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsString()
	photo: string;

	@IsString()
	category: string;

	@IsNumber()
	width: number;

	@IsNumber()
	height: number;

	@IsString()
	type: string;

	@IsString()
	color: string;
}
