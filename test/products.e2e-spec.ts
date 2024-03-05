import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateProductDto } from 'src/products/dto/createProductDto';

const testDto: CreateProductDto = {
	name: 'test',
	description:
		"Шторний матеріал Мікровелюр , гарно підходять до будь-якого інтер'єру , легкий та ніжний матеріал . виробництво Туреччина . Висота штор в рулоні до 2,90 м ширина корегується . Шиємо під індивідуальні розміри.",
	photo: '1.webp',
	category: 'штори',
	width: 1,
	height: 2.9,
	type: 'мікровелюр',
	color: 'Графітовий',
	price: 400,
};

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let testId: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/products/create (POST) | success', async () => {
		return request(app.getHttpServer())
			.post('/products/create')
			.send(testDto)
			.expect(201)
			.then(({ body }: request.Response) => {
				testId = body.id;
				expect(testId).toBeDefined();
			});
	});
});
