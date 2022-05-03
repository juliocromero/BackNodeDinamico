
import { Model } from 'sequelize';
import { sequelize } from '../../connections';
import { QuestionsStateSchema } from './QuestionsStateSchema'

//Questions Type
type QuestionsStateModel = {
  Ces_Id: number;
  Ces_Descripcion: string;
};

// class para cuestions type
class QuestionsState extends Model<QuestionsStateModel> {}


QuestionsState.init(QuestionsStateSchema,
  {
    sequelize,
    tableName: 'Cuestionario_Estado',
    timestamps: false,
  },
);

export default QuestionsState;