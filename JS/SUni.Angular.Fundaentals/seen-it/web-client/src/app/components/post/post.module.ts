import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
    declarations:[
        CommentInfoComponent,
        CommentCreateComponent,
        PostCreateComponent,
        PostDetailsComponent,
        PostEditComponent,
        PostInfoComponent,
        PostListComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        PostRoutingModule,
    ],
    // exports:[
    //     PostCreateComponent,
    //     PostDetailsComponent,
    //     PostEditComponent,
    //     PostInfoComponent,
    //     PostListComponent
    // ]
})
export class PostModule{

}