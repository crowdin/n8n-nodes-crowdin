import type { ExtensionModule } from '../../../../utils/extendProperties';
import { aiProperties } from './ai';
import { teamsProperties } from './teams';
import { usersProperties } from './users';

export const extensions: ExtensionModule[] = [aiProperties, teamsProperties, usersProperties];
