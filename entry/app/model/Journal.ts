import Entry from "./Entry";

export default class Journal {
    private title:  string; 
    private entries:  Entry[]

    constructor(title:  string, entries:  Entry[] = []) {
        this.title = title; 
        this.entries = entries; 
    }

    public getTitle(): string {
        return this.title; 
    }

    public setTitle(title: string): void {
        this.title = title; 
    }

    public getEntries():  Entry[] {
        return this.entries; 
    }

    public addEntry(entry: Entry): void {
        this.entries.push(entry); 
    }
}