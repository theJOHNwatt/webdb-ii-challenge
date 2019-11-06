exports.up = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.string('title_status', 64);
        tbl.string('transmission_type', 64);
    });
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('title_status');
        tbl.dropColumn('transmission_type');
    });
};