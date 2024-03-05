import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProductDto';
import { ProductsService } from './products.service';
import { EditProductDto } from './dto/editProductDto';
import { PRODUCT_NOT_FOUND_ERROR } from './products.constants';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}
	// стоврити продукт
	@HttpCode(201)
	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productsService.create(dto);
	}

	// отримати всі продукти
	@HttpCode(200)
	@Get('all')
	async getAll() {
		return this.productsService.getAll();
	}

	//отримати продукти за категорією
	@HttpCode(200)
	@Get('getByCategory')
	async getByCategory(@Body() dto: Pick<CreateProductDto, 'category'>) {
		return this.productsService.getByCategory(dto.category);
	}

	// отримати топ 3 продукти
	@HttpCode(200)
	@Get('getTopThree')
	async getTopThree() {
		return this.productsService.getTopThree();
	}

	// отримати продукт по кольору
	@HttpCode(200)
	@Get('getByColor')
	async getByColor(@Body() dto: Pick<CreateProductDto, 'color' | 'category'>) {
		return this.productsService.getByColor(dto);
	}

	//змінити дані
	@HttpCode(200)
	@Patch('edit/:id')
	async edit(@Body() dto: EditProductDto, @Param('id') id: number) {
		const product = await this.productsService.getById(id);
		if (!product) {
			throw new HttpException(PRODUCT_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND);
		}
		return this.productsService.edit(id, dto);
	}

	//видалити продукт
	@HttpCode(200)
	@Delete('delete/:id')
	async delete(@Param('id') id: number) {
		const product = await this.productsService.getById(id);
		if (!product) {
			throw new HttpException(PRODUCT_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND);
		}
		return this.productsService.delete(id);
	}
}
