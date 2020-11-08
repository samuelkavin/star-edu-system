import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {IParents} from './parents.interface';

import {ParentsDetails, ParentsDocument} from './parents.schema';

@Injectable()
export class ParentsService {
  constructor(
    @InjectModel('Parents')
    private readonly parentsModel: Model<ParentsDocument>,
  ) {}

  async createParents(parents: ParentsDetails): Promise<IParents> {
    const result = new this.parentsModel(parents);
    return await this.parentsModel.create(result);
  }

  async getAllParents(): Promise<IParents[]> {
    const result = await this.parentsModel.find();

    return result;
  }

  async getParentsById(parentId: string): Promise<IParents> {
    const result = await this.parentsModel.findById(parentId);

    return result;
  }
}
