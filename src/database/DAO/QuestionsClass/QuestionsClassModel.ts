
import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { QuestionsClassSchema } from './QuestionsClassSchema'

//Questions Type
type QuestionsStateModel = {
    Cuc_Id: number;
  Cuc_Descripcion: string;
  Emp_Id : number
};

// class para cuestions type
class QuestionsClass extends Model<QuestionsStateModel> {}


QuestionsClass.init(QuestionsClassSchema,
  {
    sequelize,
    tableName: 'Cuestionario_Clase',
    timestamps: false,
  },
);

export default QuestionsClass;