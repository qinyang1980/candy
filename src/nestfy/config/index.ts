import * as fs from 'fs';
import * as path from 'path';
import { NESTFY } from '../constants';
import { IRootObject } from './interface';

const filePath = path.join(process.cwd(), `${NESTFY}.json`);
const config: IRootObject = JSON.parse(fs.readFileSync(filePath, 'utf8'));

export default config;
