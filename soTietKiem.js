class soTietKiem{
    idCust;
    typeCust;
    nameCust;
    cmdCust;
    dateCust;
    amount;
    constructor(idCustInput,typeCustInput,nameCustInput,cmdCustInput,dateInput,amountInput){
        this.idCust = idCustInput;
        this.typeCust = typeCustInput;
        this.nameCust = nameCustInput;
        this.cmdCust = cmdCustInput;
        this.dateCust = dateInput;
        this.amount = amountInput;
    }
}