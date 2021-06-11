export default class cydItemsheet extends itemsheet{
    get template(){
        console.log(`Cyd | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `system/cyd/template/sheets/${this.item.data.type}-sheet.html` ;
                  }

    getData(){
        const data = super.getData();

        console.log(data);

        return data;
    }
    }
