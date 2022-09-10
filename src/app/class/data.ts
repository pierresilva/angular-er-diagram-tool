// class
import { Model } from './model';
import { Schema } from './schema';

export class Data {

  public app_type: string | null | undefined;
  public use_laravel_auth: boolean | null | undefined;
  public models: Model[] | null | undefined;
  public tool: string | null | undefined;

  private _next_model_id?: number;

  constructor() {
    this.clearData();
  }

  public getNewModelId(): number{
    this._next_model_id ? this._next_model_id++ : 0;
    return this._next_model_id ? this._next_model_id-1 : 0;;
  }

  public getModelById(model_id:number): Model | null{
    const filtered_models = this.models?.filter((v, i) => v.id === model_id) ?? [];
    if(filtered_models.length > 0){
      return filtered_models[0];
    }else{
      return null;
    }
  }

  public getModelByElementH2Id(model_element_h2_id:string): Model | null{
    const filtered_models = this.models?.filter((v, i) => v.getElementH2Id() === model_element_h2_id) ?? [];
    if(filtered_models.length > 0){
      return filtered_models[0];
    }else{
      return null;
    }
  }

  public getModelByName(model_name:string): Model | null{
    const filtered_models = this.models?.filter((v, i) => v.name === model_name) ?? [];
    if(filtered_models.length > 0){
      return filtered_models[0];
    }else{
      return null;
    }
  }

  public getSchemaByElementId( schema_element_id:string ):Schema | null{
    console.log('Data.getSchemaByElementId() is called!');
    const ids = schema_element_id.replace('model', '').split('-schema');

    const filtered_model = this.getModelById(Number(ids[0]));
    if( filtered_model ){
      const filtered_schema = filtered_model.getSchemaById(Number(ids[1]));
      if( filtered_schema ){
        return filtered_schema;
      }
    }
    return null;
  }

  public clearData():void{
    console.log('Data.clearData() is called!');
    this.app_type = 'web';
    this.use_laravel_auth = false;
    this.models = [];
    this.tool = 'ER-DIAGRAM-TOOL';
    this._next_model_id = 1;
  }

  public loadData(data: any):void{
    console.log('Data.loadData() is called!');
    this.app_type = data.app_type;
    this.use_laravel_auth = data.use_laravel_auth;
    this.models = [];

    for(let i=0; i<data.models.length; i++){
      var model = new Model(data.models[i]);
      this.models.push(model);
    }

    this.tool = data.tool;
    this._next_model_id = data._next_model_id;
  }
}
