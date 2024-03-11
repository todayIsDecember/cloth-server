import { Injectable } from '@nestjs/common';
import { mFile } from './mFile.class';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { fileElementResponse } from './dto/file-element.response';
import * as sharp from 'sharp';

@Injectable()
export class FilesService {
	async saveFile(file: mFile) {
		const uploadFolder = `${path}/images`;
		await ensureDir(uploadFolder);

		const res: fileElementResponse[] = [];

		await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
		res.push({ url: `${file.originalname}`, name: file.originalname });

		return res;
	}

	async convertToWebp(file: Buffer): Promise<Buffer> {
		return sharp(file).webp().toBuffer();
	}
}
