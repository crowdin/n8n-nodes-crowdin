import type { ExtensionModule } from '../../../utils/extendProperties';
import { dictionariesProperties } from './dictionaries';
import { sourceStringsProperties } from './sourceStrings';
import { storageProperties } from './storage';
import { stringAssetCommentsProperties } from './stringAssetComments';
import { tasksProperties } from './tasks';
import { translationMemoryProperties } from './translationMemory';

export const extensions: ExtensionModule[] = [dictionariesProperties, sourceStringsProperties, storageProperties, stringAssetCommentsProperties, tasksProperties, translationMemoryProperties];
