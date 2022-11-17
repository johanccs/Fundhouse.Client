import { DecimalPipe } from "@angular/common";
import { IHist } from "../history/IHist";

export class QuoteResponseDto {
    constructor(
        public baseCcy: string,
        public quoteCcy: string,
        public quoteAmount: number,
        public date: Date,
        public history: IHist[]  
    ) { }
}