/**
 * Internal dependencies
 */
import { EXAMPLE } from '../action-types';

export const exampleActionCreator = () => ({
  type: EXAMPLE,
  payload: 'example',
});
