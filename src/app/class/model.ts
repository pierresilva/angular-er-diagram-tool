// class
import { Schema } from './schema';

export class Model {

  public id?: number;
  public name?: string;
  public display_name?: string;
  public comment?: string;
  public use_soft_delete?: boolean;
  public schemas?: any = [];
  public is_pivot?: boolean;
  public schema_id_for_relation?: number;
  public module?: any;
  public pos_x?: number;
  public pos_y?: number;

  private _next_schema_id: number;

  constructor(model_data: any = null) {
    if (model_data) {
      this.id = model_data.id;
      this.name = model_data.name;
      this.display_name = model_data.display_name;
      this.comment = model_data.comment;
      this.use_soft_delete = model_data.use_soft_delete;
      this.schemas = [];

      for (let i = 0; i < model_data.schemas.length; i++) {
        const schema = new Schema(model_data.schemas[i]);
        this.schemas.push(schema);
      }

      this.is_pivot = model_data.is_pivot;
      this.schema_id_for_relation = model_data.schema_id_for_relation;
      this.module = model_data.module;
      this.pos_x = model_data.pos_x;
      this.pos_y = model_data.pos_y;
      this._next_schema_id = model_data._next_schema_id;
    } else {
      this.id = 0;
      this.name = '';
      this.display_name = '';
      this.comment = '';
      this.use_soft_delete = false;
      this.schemas = [];
      this.is_pivot = false;
      this.schema_id_for_relation = 0;
      this.module = null;
      this.pos_x = 0;
      this.pos_y = 0;
      this._next_schema_id = 1;
    }
  }

  public getNewSchemaId(): number {
    this._next_schema_id++;
    return this._next_schema_id - 1;
  }

  public getElementId(): string {
    return 'model' + this.id;
  }

  public getElementH2Id(): string {
    return 'model' + this.id + '-h2';
  }

  public getSchemaById(schema_id: number): Schema | null {
    const schemas_filterded = this.schemas?.filter((v: any, i: any) => v.id === schema_id) || [];
    if (schemas_filterded.length > 0) {
      return schemas_filterded[0];
    } else {
      return null;
    }
  }

  public getSchemaByName(schema_name: string): Schema | null {
    const schemas_filterded = this.schemas?.filter((v: any, i: any) => v.name === schema_name) || [];
    if (schemas_filterded.length > 0) {
      return schemas_filterded[0];
    } else {
      return null;
    }
  }
}
