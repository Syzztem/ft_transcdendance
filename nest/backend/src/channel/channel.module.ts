import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from 'diagnostics_channel';

@Module({
    imports: [TypeOrmModule.forFeature([Channel])],
    controllers: [ChannelController,],
    providers: [ChannelService,],
})
export class ChannelModule { }
