export interface Fact {
    _id: string;
    title: string;
    uploader: string;
    img: string;
    category: string;
    comments?: [string];
    rating?: number;
}