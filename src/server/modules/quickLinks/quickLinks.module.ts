import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { QuickLinksFeature } from './quickLinks.schema'
import { QuickLinksResolver } from './quickLinks.resolver'
import { QuickLinksService } from './quickLinks.service'
import { QuickLinksController } from './quickLinks.controller'

@Module({
  imports: [MongooseModule.forFeature([QuickLinksFeature])],
  controllers: [QuickLinksController],
  providers: [QuickLinksService, QuickLinksResolver],
})
export class QuickLinksModule {}
