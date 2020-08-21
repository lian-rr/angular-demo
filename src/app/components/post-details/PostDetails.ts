import {Comment} from '../comments/Comment';

export class PostDetails {
    id: number;
    authorId: number;
    title: string;
    body: string;
    comments: Comment[];
}