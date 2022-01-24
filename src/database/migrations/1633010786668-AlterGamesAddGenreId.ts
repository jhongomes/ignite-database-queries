import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterGamesAddGenreId1633010786668 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "games",
      new TableColumn({
        name: "genre_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "games",
      new TableForeignKey({
        name: "FKGameGenre",
        referencedTableName: "genres",
        referencedColumnNames: ["id"],
        columnNames: ["genre_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("games", "FKGameGenre");

    await queryRunner.dropColumn("games", "genre_id");
  }
}
