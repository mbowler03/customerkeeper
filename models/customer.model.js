
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define(
      'customer',
      {
        first_name: {
          type: Sequelize.STRING,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        address2: {
          type: Sequelize.STRING,
        },
        city: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        zip: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
      },
      { timestamps: false }
    );
  
    return Customer;
  };