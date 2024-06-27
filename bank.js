class Bank{
    name;
    listBank;
    constructor(nameInput){
        this.name = nameInput;
        this.listBank = [];
    }

    addSoTietKiem(newSoTietKiem){
        this.listBank.push(newSoTietKiem);
    };

    removeSoTietKiem(index){
        this.listBank.splice(index,1);
    }
}