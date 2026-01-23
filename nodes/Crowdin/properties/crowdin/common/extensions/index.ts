import type { ExtensionModule } from '../../../../utils/extendProperties';
import { aiProperties } from './ai';
import { usersProperties } from './users';

export const extensions: ExtensionModule[] = [aiProperties, usersProperties];
