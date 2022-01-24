import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderGames1633024593505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "order_games",
        columns: [
          {
            name: "ordersId",
            type: "uuid",
          },
          {
            name: "gamesId",
            type: "uuid",
          },
        ],

        foreignKeys: [
          {
            name: "FKOrderGame",
            referencedTableName: "orders",
            referencedColumnNames: ["id"],
            columnNames: ["ordersId"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },

          {
            name: "FKGameOrder",
            referencedTableName: "games",
            referencedColumnNames: ["id"],
            columnNames: ["gamesId"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_games");
  }
}
