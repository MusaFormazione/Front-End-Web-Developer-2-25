class Pizza {
    gusto;
    prezzo;
    disponibile;
    id;
    constructor(gusto, prezzo, disponibile, id) {
        this.gusto = gusto;
        this.prezzo = prezzo;
        this.disponibile = disponibile;
        this.id = id;
    }
    toString() {
        return JSON.stringify(this);
    }
}
export default Pizza;
//# sourceMappingURL=Pizza.js.map