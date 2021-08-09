import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1628464880759 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('autocars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('autocars', true);
  }
}
