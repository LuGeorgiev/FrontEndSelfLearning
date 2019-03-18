import { data } from './seed';
import { Article } from '../models/article';

export class ArticleData {
    getData(): Article[] {
        let articles: Article[]=[];
        // for (const a of data) {
        //     articles.push(new Article(a.title,a.description,a.author,a.imageUrl));;
        // }
        for (let i = 0; i < data.length; i++) {
            articles[i] = new Article(data[i].title,
                data[i].description,
                data[i].author, 
                data[i].imageUrl);
        }

        return articles;
    }
}