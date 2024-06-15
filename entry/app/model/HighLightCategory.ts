export default class HighLightCategory {
    private color:  string; 
    private passages:  string[]; 

    constructor(color: string, passages: string[] = []) {
        this.color = color; 
        this.passages = passages; 
    }

    public getColor(): string {
        return this.color; 
    }

    public setColor(color: string): void {
        this.color = color; 
    }

    public getPassages():  string[] {
        return this.passages; 
    }

    public addPassage(passage: string): void {
        this.passages.push(passage); 
    }
}