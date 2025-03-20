export class Customer {
    public cusId: number;
    name: string;
    mobile: number;
    emailId?: string;
    constructor() {
        this.cusId = 17;
        this.name = '';
        this.mobile = 0;
    }
}
export class Department {
    departmentId: number;
    departmentName: string;
    departmentLogo: string;
     constructor() {
        this.departmentId = 0;
        this.departmentName = '';
        this.departmentLogo = '';
    }
}