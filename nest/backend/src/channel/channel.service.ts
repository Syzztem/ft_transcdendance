import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateChannelDTO from './dto/create-channel.dto';
import GetChannelDTO from './dto/get-channel.dto';
import { Channel } from '../database/entities/Channel';
import { Repository } from 'typeorm';

@Injectable()
export class ChannelService {
    constructor(@InjectRepository(Channel) private channelRepository: Repository<Channel>) {}

    async getChannelById(dto: GetChannelDTO) : Promise<Channel> {
        return this.channelRepository.findOne({
            select: {
                name: dto.name
            },
            relations: {
                admin: dto.admin,
                users: dto.users,
                messages: dto.messages
            },
            where: {id: dto.id}
        });
    }

    async createChannel(dto: CreateChannelDTO) {
        this.channelRepository.create(dto);
    }
}
