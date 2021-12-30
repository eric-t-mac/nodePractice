import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    index() {
        return 'i am article'
    }

    @Get('add') 
    addArticle(){
        return '增加新闻'
    }

}
