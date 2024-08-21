/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function version4(_options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const version = `4.0.0`;
    context.logger.info(`Applying migration for lib to version ${version}`);
    return host;
  };
}

