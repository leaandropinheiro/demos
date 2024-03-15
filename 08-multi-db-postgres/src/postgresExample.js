const Sequelize = require('sequelize');
const driver = new Sequelize(
  'heroes',
  'leandro',
  '1728',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  }
)

async function main() {
  const heroes = driver.define('heroes', {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      required: true
    },
    power: {
      type: Sequelize.STRING,
      required: true
    }
  }, {
    tableName: 'TB_HEROES',
    freezeTableName: false,
    timestamps: false
  })
}

main()