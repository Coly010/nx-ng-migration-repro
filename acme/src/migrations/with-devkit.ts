/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

require('@angular-devkit/schematics');

export default function version4(_options: any): Rule {
  console.log('withDevkit: version4');
  return (host: Tree, context: SchematicContext) => {
    const version = `4.0.0`;
    context.logger.info(
      `withDevkit: Applying migration for lib to version ${version}`
    );
    return host;
  };
}
