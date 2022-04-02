export type ArrayMetadata<ArrType> = {
  length: number;
  firstObject: ArrType | undefined;
};
export function getArrayMetadata<ArrType>(
  arr: ArrType[]
): ArrayMetadata<ArrType>;