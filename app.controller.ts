import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: Partial<User>) {
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
