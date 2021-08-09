"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatabase1628464880759 = void 0;
class CreateDatabase1628464880759 {
    async up(queryRunner) {
        queryRunner.createDatabase('autocars', true);
    }
    async down(queryRunner) {
        queryRunner.dropDatabase('autocars', true);
    }
}
exports.CreateDatabase1628464880759 = CreateDatabase1628464880759;
//# sourceMappingURL=1628464880759-CreateDatabase.js.map