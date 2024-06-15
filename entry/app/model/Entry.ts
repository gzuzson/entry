export default class Entry {
    private content:  string; 

    constructor(content: string) {
        this.content = content; 
    }

    public getContent(): string {
        return this.content; 
    }

    public setContent(title:  string):  void {
        this.content = title; 
    }
}