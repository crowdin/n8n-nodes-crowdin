import type { ExtensionModule } from '../../../utils/extendProperties';
import { advisorsProperties } from './advisors';
import { dictionariesProperties } from './dictionaries';
import { sourceStringsProperties } from './sourceStrings';
import { storageProperties } from './storage';
import { stringAssetCommentsProperties } from './stringAssetComments';
import { tasksProperties } from './tasks';
import { translationMemoryProperties } from './translationMemory';

export const extensions: ExtensionModule[] = [advisorsProperties, dictionariesProperties, sourceStringsProperties, storageProperties, stringAssetCommentsProperties, tasksProperties, translationMemoryProperties];
