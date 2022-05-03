import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../connections';
import { QuestionsTypeVisualizationSchema } from './QuestionsTypeVisualizationSchema'

//Questions Type
type QuestionsTypeVisualizationModel = {
  Ctv_Id: number;
  Ctv_Descripcion: string;
};

// class para cuestions type
class QuestionsTypeVisualization extends Model<QuestionsTypeVisualizationModel> {}


QuestionsTypeVisualization.init(QuestionsTypeVisualizationSchema,
  {
    sequelize,
    tableName: 'Cuestionario_Tipo_Visualizacion',
    timestamps: false,
  },
);

export default QuestionsTypeVisualization;
