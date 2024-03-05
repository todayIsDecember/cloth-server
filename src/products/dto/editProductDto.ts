import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditProductDto {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	description: string;

	@IsOptional()
	@IsString()
	photo: string;

	@IsOptional()
	@IsNumber()
	price: number;
}
