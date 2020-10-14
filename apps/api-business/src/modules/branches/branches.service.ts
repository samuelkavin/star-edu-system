import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {BranchesDocument} from './branches.schema';
import {BranchesDto} from './branches.dto';
import {IBranches} from './branches.interface';

@Injectable()
export class BranchesService {
  constructor(@InjectModel('Branches') private branchesModel: Model<BranchesDocument>) {}

  async createCompanyBranch(response: BranchesDto): Promise<BranchesDto> {
    const result = new this.branchesModel(response);

    return await this.branchesModel.create(result);
  }

  async getCompanyBranches(profileId: string): Promise<IBranches[]> {
    console.log('profileIdprofileId', profileId);
    console.log(
      'await this.branchesModel.findById(profileId)',
      await this.branchesModel.findById(profileId),
    );

    return await this.branchesModel.find({profileId});
  }
}
