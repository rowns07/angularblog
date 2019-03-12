export class DadosPost {

    private id: number;
    private title: string;
    private content: string;
    private status: string;

    public getId(): number {
        return this.id;
    }
    public setUId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }
    public setTitle(title: string) {
        this.title = title;
    }

    public getContent(): string {
        return this.content;
    }
    public setContent(content: string) {
        this.content = content;
    }

    public getStatus(): string {
        return this.status;
    }
    public setStatus(status: string) {
        this.status = status;
    }
}
