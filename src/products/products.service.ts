import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/createProductDto';
import { EditProductDto } from './dto/editProductDto';

@Injectable()
export class ProductsService {
	constructor(private readonly prismaService: PrismaService) {}

	//стоврити продукт
	async create(dto: CreateProductDto) {
		return this.prismaService.products.create({
			data: {
				price: dto.type,
				...dto,
			},
			include: { prices: true },
		});
	}

	//отримати всі продукти
	async getAll() {
		return this.prismaService.products.findMany({
			include: {
				prices: true,
			},
		});
	}

	//отримати топ 3 продукти
	async getTopThree() {
		return this.prismaService.products.findMany({ take: 3, include: { prices: true } });
	}

	//отримати продукти за кольором
	async getByColor({ color, category }: { color: string; category: string }) {
		return this.prismaService.products.findMany({
			where: { color, category },
			include: { prices: true },
		});
	}

	//отримати продукти за категорією
	async getByCategory(category: string) {
		return this.prismaService.products.findMany({
			where: { category },
			include: {
				prices: true,
			},
		});
	}

	//отримати продукт за id
	async getById(id: number) {
		return this.prismaService.products.findUnique({ where: { id: Number(id) } });
	}

	//змінити дані продукта
	async edit(id: number, dto: EditProductDto) {
		return this.prismaService.products.update({
			where: { id: Number(id) },
			data: dto,
			include: { prices: true },
		});
	}

	//видалити продукт
	async delete(id: number) {
		return this.prismaService.products.delete({
			where: { id: Number(id) },
			include: { prices: true },
		});
	}
}
