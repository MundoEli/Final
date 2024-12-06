import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PomodoroModule } from './pomodoro/pomodoro.module'
import { TaskModule } from './task/task.module'
import { TimeBlockModule } from './time-block/time-block.module'
import { UserModule } from './user/user.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'


@Module({
	imports: [ 
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		TaskModule,
		TimeBlockModule,
		PomodoroModule
	]
})
export class AppModule {}
