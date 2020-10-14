import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {ProfilesDto} from './profiles.dto';
import {IProfiles} from './profiles.interface';
import {ProfilesDocument} from './profiles.schema';

@Injectable()
export class ProfilesService {
  constructor(@InjectModel('Profiles') private profilesModel: Model<ProfilesDocument>) {}

  async createCompanyProfile(createProfiles: ProfilesDto): Promise<IProfiles> {
    const {name, designation, nric} = createProfiles;

    const profile = new this.profilesModel({
      name,
      designation,
      nric,
    });

    return await this.profilesModel.create(profile);
  }

  async updateCompanyProfile(profileId: string, profileDetails: ProfilesDto): Promise<any> {
    if (!profileId) {
      throw new NotFoundException('ProfileId is not found!');
    }

    await this.profilesModel.update({_id: profileId}, {$set: profileDetails});

    return {
      message: `${profileDetails.name} has successfully updated`,
    };
  }

  async getAllCompanies(): Promise<IProfiles[]> {
    return await this.profilesModel.find();
  }

  async getAllCompanyBranches(profileId: string) {
    const result = await this.profilesModel.findById(profileId);
    return result;
  }
}
