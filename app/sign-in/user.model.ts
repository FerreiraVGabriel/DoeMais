export class User {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    lastName: string;
    passwordOk: boolean;
    hasEmail() {
      return this.email != '';
    }
  }