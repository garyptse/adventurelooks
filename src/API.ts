/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  userID: string,
  images?: Array< ImageInput | null > | null,
  id?: string | null,
};

export type ImageInput = {
  imageID: string,
  blurb: string,
};

export type ModelUserConditionInput = {
  userID?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  userID: string,
  images?:  Array<Image | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Image = {
  __typename: "Image",
  imageID: string,
  blurb: string,
};

export type UpdateUserInput = {
  userID?: string | null,
  images?: Array< ImageInput | null > | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelUserFilterInput = {
  userID?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  userID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UserQueryVariables = {
  userID?: string | null,
};

export type UserQuery = {
  user?:  Array< {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null > | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      userID: string,
      images?:  Array< {
        __typename: "Image",
        imageID: string,
        blurb: string,
      } | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    userID: string,
    images?:  Array< {
      __typename: "Image",
      imageID: string,
      blurb: string,
    } | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
