export enum SessionActionType {
  SAVE_USER = 'SAVE_USER',
  REMOVE_USER = 'REMOVE_USER'
}
export interface SessionAction {
  type: SessionActionType;
  user?: any;
}

export const saveUserAction = (user: any) => ({
  type: SessionActionType.SAVE_USER,
  user
});

export const removeUserAction = () => ({
  type: SessionActionType.REMOVE_USER
});
