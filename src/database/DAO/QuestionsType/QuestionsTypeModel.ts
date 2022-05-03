import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { QuestionsTypeSchema } from './QuestionsTypeSchema'

//Questions Type
type QuestionsTypeModel = {
  //  id : number
  Cut_Id: number;
  Cut_Descripcion: string;
};

// class para cuestions type
class QuestionsType extends Model<QuestionsTypeModel> {}


QuestionsType.init(QuestionsTypeSchema,
  {
    sequelize,
    tableName: 'Cuestionario_Tipo',
    timestamps: false,
  },
);

export default QuestionsType;
