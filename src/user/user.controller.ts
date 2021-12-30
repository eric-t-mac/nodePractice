import { Controller, Get, Query, Request } from '@nestjs/common';
import { query } from 'express';
// 类装饰器
@Controller('user')
export class UserController {

    @Get()//方法装饰器
    index() {
        return '用户中心user'
    }

    @Get('add')
    addData(@Query() query) {//方法参数装饰器
        console.log(query);
        return query
    }

    @Get('edit')
    editData(@Request() req) {
        console.log(req.query);
        return '通过Request获取get传值'
    }
} 
