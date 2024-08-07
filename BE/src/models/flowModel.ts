import { client } from "../dbconnection";

type flow = {
    id: number,
    date: string,
    nature: string,
    category: string,
    import: number
    natura: string,
    categoria: string,
    importo: number
}

const flow:string = "CREATE TABLE IF NOT EXISTS public.flusso (data_inserimento date NULL, id int NOT NULL, natura varchar NULL, categoria varchar NULL, importo integer NULL, CONSTRAINT flusso_pk PRIMARY KEY (id));";

async function createFlowTable(){
    await client.query((flow), (err: any, res:any) => {
        if(err){
            console.error(err);
        }else{
            console.log("CREAZIONE FLUSSO RIUSCITA", res);
        }
    });
}

export {flow, createFlowTable}