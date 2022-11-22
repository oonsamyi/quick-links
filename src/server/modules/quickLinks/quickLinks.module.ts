import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { QuickLinksFeature } from './quickLinks.schema'
import { QuickLinksResolver } from './quickLinks.resolver'
import { QuickLinksService } from './quickLinks.service'

@Module({
  imports: [MongooseModule.forFeature([QuickLinksFeature])],
  providers: [QuickLinksService, QuickLinksResolver],
})
export class QuickLinksModule {}
