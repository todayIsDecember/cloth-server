import { Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileElementResponse } from './dto/file-element.response';
import { mFile } from './mFile.class';

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@HttpCode(200)
	@Post()
	@UseInterceptors(FileInterceptor('files'))
	async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<fileElementResponse[]> {
		if (file.mimetype.includes('image')) {
			const buffer = await this.filesService.convertToWebp(file.buffer);
			return this.filesService.saveFile(
				new mFile({ originalname: `${file.originalname.split('.')[0]}.webp`, buffer }),
			);
		} else {
			return;
		}
	}
}
