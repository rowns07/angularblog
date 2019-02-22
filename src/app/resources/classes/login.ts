export class Login {
    private username: string;
    private password: string;
    private token: string;
    private user_email: string;
    private user_nicename: string;
    private user_display_name: string;

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

    public getUser_email(): string {
        return this.user_email;
    }

    public setUser_email(user_email: string): void {
        this.user_email = user_email
    }
    public getUser_nicename(): string {
        return this.user_nicename;
    }

    public setUser_nicename(user_nicename: string): void {
        this.user_nicename = user_nicename
    }
    public getUser_display_name(): string {
        return this.user_display_name;
    }

    public setUser_display_name(user_display_name: string): void {
        this.user_display_name = user_display_name
    }
}
