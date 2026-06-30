interface Portiere{
    nSportelli:number;
    apriSportello():void
    chiudiSportello():void
}

interface Motore{
    accendi():void
    spegni():void
}

interface Veicolo{
    vel:number;
    maxVel:number;
    nRuote:number;
    accelera():void
    frena():void
}

class Auto implements Portiere, Motore, Veicolo{
    nSportelli!: number;
    vel!: number;
    maxVel!: number;
    nRuote!: number;
    accelera(): void {
        throw new Error("Method not implemented.");
    }
    frena(): void {
        throw new Error("Method not implemented.");
    }
    accendi(): void {
        throw new Error("Method not implemented.");
    }
    spegni(): void {
        throw new Error("Method not implemented.");
    }
    apriSportello(): void {
        throw new Error("Method not implemented.");
    }
    chiudiSportello(): void {
        throw new Error("Method not implemented.");
    }

}

interface Pizza{
    gusto:string,
    prezzo:number,
    disponibile:boolean
}

const pizza:Pizza = {
    gusto: "",
    prezzo: 0,
    disponibile: false
} 