import {Comment} from '../comments/Comment';

export class PostDetails {
    id: number;
    userId: number;
    title: string;
    body: string;
    comments: Comment[];
}