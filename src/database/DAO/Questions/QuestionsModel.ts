import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import {  QuestionsSchema} from './QuestionsSchema'

//Type de tabla
type QuestionsModel = {
  Cst_Id?: number;
  Cts_Nombre: string;
  Cut_Id: number;
  Sol_Id: number;
  Cts_RequiereGeoPop: number;
  Cuc_Id: number;
  Ces_Id: number;
  Ctv_Id: number;
  Emp_Id: number;
  Cts_CuestionarioInOut: number;
};

//Class para models questions
class Questions extends Model<QuestionsModel> {}

Questions.init(QuestionsSchema,
  {
    sequelize,
    tableName: 'Cuestionario',
    timestamps: false,
  },
);

export default Questions;
