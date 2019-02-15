export class Login {
    private username: string;
    private password: string;
    private token:string;
    private authorization: string;
    private authorizationValidity: string;
    private usuarioId: number;

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }



    // public getAuthorizationValidity(): string {
    //     return this.authorizationValidity;
    // }

    // public setAuthorizationValidity(authorizationValidity: string): void {
    //     this.authorizationValidity = authorizationValidity;
    // }

    // public getUsuarioId(): number {
    //     return this.usuarioId;
    // }

    // public setUsuarioId(usuarioId: number): void {
    //     this.usuarioId = usuarioId;
    // }
}
